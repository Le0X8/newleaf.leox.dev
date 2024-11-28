<script lang="ts">
  import { name } from '$appconfig';

  export let data: { pages: {
    title: string;
    date: string;
    path: string;
    description: string;
  }[] };
</script>

<svelte:head>
	<title>{data.meta?.title ?? 'Untitled'} | {name}</title>
</svelte:head>

<svelte:component this={data.content} />

<hr class="border-white" />

<h2>List of pages</h2>

{#each data.pages as page}
  <a href="/{page.path}" id="{page.path}" class="">
    <h2>{page.title}</h2>
    <p>{page.description}</p>
    <p>{page.date}</p>
  </a>
{/each}