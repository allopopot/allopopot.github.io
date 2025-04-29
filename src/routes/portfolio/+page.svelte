<script>
    const { data } = $props();
</script>

<div class="p-4">
    <h1
        class="font-bold text-5xl underline underline-offset-8 decoration-primary mt-4 mb-10"
    >
        My Glorious Portfolio
    </h1>

    <div class="grid gap-10 grid-cols-1 md:grid-cols-2">
        {#each data.portfolios as px}
            <div class="w-full">
                <h2
                    class="text-3xl font-semibold mb-4 decoration-primary underline"
                >
                    {px.title}
                </h2>
                {#if px?.placeholderImage}
                    <div class="aspect-video w-full mb-4">
                        <img
                            class="h-full w-auto object-cover object-top-left rounded"
                            src={px.placeholderImage}
                            alt={px.placeholderImage}
                        />
                    </div>
                {/if}
                <p class="text-lg mb-1">{px.summary}</p>
                <a
                    href={`/portfolio/${px.id}`}
                    class="decoration-primary underline text-primary group"
                >
                    <span> Explore </span>
                    <span
                        class="material-symbols-outlined !text-xs group-hover:ml-1 transition-all"
                    >
                        arrow_forward
                    </span>
                </a>
            </div>
        {/each}
    </div>
</div>
