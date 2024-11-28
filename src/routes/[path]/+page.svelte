<script lang="ts">
	import { name } from '$appconfig';

	export let data;
</script>

<svelte:head>
	<title>{data.meta?.title ?? 'Untitled'} | {name}</title>
</svelte:head>

<svelte:component this={data.content} />
