import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
    /*
    weird vite/sveltekit bug here:
    - path has to be declared outside of the import
    - path may not contain the $pages alias
    otherwise the import will fail for no reason
    but only if the path param contains a slash
    otherwise it works just fine, very strange
    */
    const path = `../../pages/${params.path.length > 0 ? params.path.split('.')[0] : 'index'}.md`;
		const post = await import( /* @vite-ignore */
			path
		);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		console.error(e);
		try {
      const path = `../../pages/${params.path.split('.')[0] + (params.path.endsWith('/') ? '' : '/') + 'index'}.md`;
			const post = await import( /* @vite-ignore */
				path
			);

			return {
				content: post.default,
				meta: post.metadata
			};
		} catch (e) {
			console.error(e);
			error(404, `Not Found`);
		}
	}
}
