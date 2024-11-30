<script lang="ts">
	import { name } from '$appconfig';

	export let data: {
		pages: {
			title: string;
			date: string;
			path: string;
			description: string;
		}[];
		meta: {
			title: string;
			date: string;
			path: string;
			description: string;
		};
		content: any;
	};

	const featured = [
		{
			title: 'Save Editor (legacy)',
			description: 'by Marc Robledo',
			url: '/editor-legacy',
			image: '/acnl-editor/resources/logo.png'
		},
		{
			title: 'Pattern Tool',
			description: 'by Thulinma',
			url: '/design-editor',
			image: 'https://cdn.jsdelivr.net/gh/Thulinma/ACNLPatternTool@master/src/assets/icons/banner.min.svg'
		}
	];
</script>

<svelte:head>
	<title>{data.meta?.title ?? 'Untitled'} | {name}</title>
</svelte:head>

<svelte:component this={data.content} />

<hr class="border-white" />

<div class="grid grid-cols-3 gap-4">
	{#each featured as featured}
		<a
			class="flex flex-col items-center justify-center gap-2 rounded-lg border border-white p-4 text-center decoration-transparent transition hover:decoration-white"
			href={featured.url}
		>
			<img src={featured.image} class="m-0 h-24" alt="" />
			<h2 class="m-0">{featured.title}</h2>
			<p class="m-0">{featured.description}</p>
		</a>
	{/each}
</div>

<hr class="border-white" />

<h2>List of pages</h2>

{#each data.pages as page}
	<a href="/{page.path}" id={page.path} class="">
		<h2>{page.title}</h2>
		<p>{page.description ?? 'No description.'}</p>
		<p>{page.date ?? 'Unknown update time.'}</p>
	</a>
{/each}
