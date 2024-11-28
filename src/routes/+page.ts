export async function load() {
  // @ts-expect-error ts flags this as not found for no reason
	const content = await import('/src/pages/index.md');
	const pages = import.meta.glob('/src/pages/*.md', { eager: true }) as Record<
		string,
		{
			metadata: {
				title: string;
				date: string;
				description: string;
			};
		}
	>;
	const keys = Object.keys(pages);
	const pageList = keys.map((key) => {
		const page = {
			title: pages[key].metadata.title,
			date: pages[key].metadata.date,
			description: pages[key].metadata.description,
			path: key.replace('/src/pages/', '').replace('.md', '')
		};
		return page;
	}).filter((page) => page.path !== 'index');
	return {
		content: content.default,
		meta: content.metadata as {
			title: string;
      date: string;
      description: string;
		},
		pages: pageList
	};
}
