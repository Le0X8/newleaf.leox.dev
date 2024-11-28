import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const content = await import(`$pages/${params.path}.md`);

		return {
			content: content.default,
			meta: content.metadata as {
				title: string;
			},
			path: params.path
		};
	} catch {
		error(404, 'Not Found');
	}
}