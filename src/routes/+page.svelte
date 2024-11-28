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
</script>

<svelte:head>
	<title>{data.meta?.title ?? 'Untitled'} | {name}</title>
</svelte:head>

<svelte:component this={data.content} />

<hr class="border-white" />

<div class="grid grid-cols-3 gap-4">
	{#each [{ title: 'Save Editor (legacy)', description: 'by Marc Robledo', url: '/editor-legacy', image: '/acnl-editor/resources/logo.png' }] as featured}
		<a
			class="flex flex-col items-center justify-center gap-2 rounded-lg text-center w-fit border border-white decoration-transparent transition hover:decoration-white p-4"
			href={featured.url}
		>
			<img src={featured.image} class="h-24 m-0" alt="" />
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
