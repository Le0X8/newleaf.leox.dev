<script lang="ts">
	import '$styles/global.scss';

	import app from '$appconfig';

	const oneYear = new Date().getFullYear() == app.footer.copyright.since;
</script>

<svelte:head>
	<title>Untitled | {app.name}</title>
</svelte:head>

<!-- TODO: add navigation for mobile -->
<nav class="fixed left-0 top-0 flex h-12 w-full bg-lime-800 text-white z-50">
	<a href="/" class="flex">
		<header class="flex w-fit items-center gap-2 px-2 py-2">
			<img src="/favicon.svg" alt="{app.name} logo" class="size-8" />
			<h1 class="text-xl font-medium">{app.name}</h1>
		</header>
	</a>
	<div class="grow" />
	<ul class="mr-3 flex items-center gap-2">
		{#each app.nav as { title, url }, i}
			<li
				class="flex h-6 items-center pl-1 {i + 1 == app.nav.length
					? ''
					: 'border-r-2 border-r-lime-600 pr-3'}"
			>
				<a href={url} class="underline decoration-transparent transition hover:decoration-lime-600"
					>{title}</a
				>
			</li>
		{/each}
	</ul>
</nav>
<main class="mt-12 min-h-[calc(100vh-3rem)] w-full bg-lime-700 p-2 text-white">
	<div class="prose prose-slate prose-invert mx-auto my-6 h-fit w-full max-w-[50rem]">
		<slot />
	</div>
</main>
<footer class="border-t-2 border-t-lime-600 bg-lime-700 text-white">
	<p class="p-1 text-center text-sm font-medium">
		&copy; {oneYear
			? app.footer.copyright.since
			: `${app.footer.copyright.since}-${new Date().getFullYear()}`}
		<a href={app.footer.copyright.url ?? '/'} class="underline">{app.footer.copyright.owner}</a>
	</p>
</footer>
