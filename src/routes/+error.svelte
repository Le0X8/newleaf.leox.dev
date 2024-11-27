<script lang="ts">
	import { page } from '$app/stores';
	import { name } from '$appconfig';
</script>

<svelte:head>
	<title>{$page.status} ({$page?.error?.message}) | {name}</title>
</svelte:head>

<h1>{$page.status} ({$page?.error?.message})</h1>

<p>Go back to <a href="/">home</a>.</p>
