<script lang="ts">
	import "../app.css";

	let { children } = $props();
	let links = $state([
		{ route: "/", text: "Home" },
		{ route: "/about", text: "About" },
		{ route: "/portfolio", text: "Portfolio" },
	]);
</script>

<div class="px-4 pb-4 flex flex-row flex-nowrap gap-4 items-center">
	<img class="w-20 h-auto" src="/logo.svg" alt="" />
	<!-- <h1
		class="text-zinc-900 bg-yellow-400 font-semibold text-2xl w-max px-4 py-2"
	>
		Pascoal Daniel Fernandes
	</h1> -->
	<div class="border-l border-l-neutral-200">
		<h2 class="text-base h-full px-4 py-2">
			<span class="">Full-Stack Developer.</span>
			<br />
			<span class="italic">Handcrafting Software,</span>
			<span class="italic underline underline-offset-4 decoration-primary"
				>Since 2023.</span
			>
		</h2>
	</div>
</div>
<div
	class="z-[10] flex flow-row flex-nowrap py-4 sticky top-0 bg-neutral-800 border-y border-y-primary"
>
	{#each links as link}
		<a href={link.route} class="contents">
			<p class="px-4 hover:underline underline-offset-8">{link.text}</p>
		</a>
	{/each}
</div>

{@render children()}
