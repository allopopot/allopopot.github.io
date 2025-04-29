<script>
    // @ts-nocheck

    import emblaCarouselSvelte from "embla-carousel-svelte";
    import ChevronRight from "../../../components/icons/chevron-right.svelte";
    import ChevronLeft from "../../../components/icons/chevron-left.svelte";

    let emblaApi = {};
    let { data } = $props();

    function emblaAutoPlay() {
        setInterval(emblaApi.scrollNext, 5000);
    }

    function onEmblaInit(event) {
        emblaApi = event.detail;
        emblaAutoPlay();
    }
</script>

<div class="p-4 pt-8 w-full md:w-5/6 mx-auto">
    <h1
        class="font-bold text-5xl underline underline-offset-8 decoration-primary mb-10"
    >
        {data.portfolio?.title}
    </h1>

    {#if data.portfolio?.picturesPath && data.portfolio?.picturesPath?.length > 0}
        <div
            class="overflow-hidden mb-8"
            use:emblaCarouselSvelte={{ options: { loop: true } }}
            onemblaInit={onEmblaInit}
        >
            <div class="flex gap-2">
                {#each data.portfolio?.picturesPath as ax}
                    <div class="z-[10] shrink-0 grow-0 basis-full">
                        <img
                            src={ax}
                            class="h-full w-auto object-cover object-top-left rounded-lg"
                            alt=""
                        />
                    </div>
                {/each}
            </div>
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="flex justify-end gap-2 mt-2">
                <button
                    onclick={() => {
                        emblaApi.scrollPrev();
                    }}
                    class="contents"
                >
                    <ChevronLeft size={30} className="text-primary"
                    ></ChevronLeft>
                </button>
                <button
                    onclick={() => {
                        emblaApi.scrollNext();
                    }}
                    class="contents"
                >
                    <ChevronRight size={30} className="text-primary"
                    ></ChevronRight>
                </button>
            </div>
        </div>
    {/if}

    <p class="text-lg">{data.portfolio?.description.join(" ")}</p>
</div>
