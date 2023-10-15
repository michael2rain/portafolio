<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import AngleIcon from "../icons/angle.svelte";
    import CloseIcon from "../icons/close.svelte";

    interface Image {
        id?: string;
        sourceUrl?: string;
        mediaItemUrl?: string;
        altText?: string;
    }
    export let images: Image[] = [];

    let slideIndex: number = 1;
    let isLightBoxOpen: boolean = false;

    function openLightBox(index: number) {
        slideIndex = index;
        isLightBoxOpen = true;
        document.body.style.overflow = "hidden";
    }

    function closeLightBox() {
        isLightBoxOpen = false;
        document.body.style.overflow = "auto";
    }

    function changeSlide(n: number) {
        showSlide(slideIndex + n);
    }

    function showSlide(n: number) {
        if (n < 0) {
            slideIndex = images.length - 1;
        } else if (n >= images.length) {
            slideIndex = 0;
        } else {
            slideIndex = n;
        }
    }

    function handleKeyDown(event) {
        if (event.key === "Escape" && isLightBoxOpen) {
            closeLightBox();
        }
    }

    onMount(() => {
        document.addEventListener("keydown", handleKeyDown);
    });
</script>

<ul class="w-[70%] grid grid-cols-2 gap-x-7 gap-y-10">
    {#each images as image, index}
        <li
            class="group relative items-end bg-pink-200/5 rounded-xl h-fit w-full max-h-[235px] pr-4 pl-3 pt-3 overflow-hidden"
        >
            <img
                class="md:block md:w-[320px] lg:w-[350px] xl:w-full h-full object-cover bottom-0 transition-all"
                width="213"
                height="auto"
                src={image.sourceUrl}
                alt={image.altText}
            />
            <button
                on:click={() => openLightBox(index)}
                class="opacity-0 group-hover:opacity-100 group-hover:bg-pink/25 absolute inset-0 flex flex-row items-center justify-center transition-all ease cursor-zoom-in"
            />
        </li>
    {/each}
</ul>

{#if isLightBoxOpen}
    <div
        transition:fly={{ y: 200, duration: 200 }}
        class="overflow-y-hidden fixed inset-0 z-50 w-full h-full flex flex-col items-center justify-center bg-pink/80"
        tabindex="-1"
        role="dialog"
        aria-modal="true"
    >
        <div
            class="relative w-full xl:w-[90vw] 2xl:w-[60vw] h-full 2xl:h-[90vh] px-14 py-10"
        >
            <ul class="w-full h-full flex flex-row items-center">
                {#each images as image, index}
                    <li
                        class="{index === slideIndex
                            ? 'block'
                            : 'hidden'} group relative overflow-hidden w-full max-h-full"
                    >
                        <img
                            class="w-full h-full max-h-full object-contain bottom-0 transition-all"
                            width="213"
                            height="auto"
                            src={image.mediaItemUrl}
                            alt={image.altText}
                        />
                    </li>
                {/each}
            </ul>
            <div
                class="absolute inset-0 flex flex-row justify-between z-40 items-center"
            >
                <button
                    on:click={() => changeSlide(-1)}
                    class="group hover:-translate-x-1 transition-all px-3 py-5 active:bg-pink-100/5 rounded-lg"
                    ><AngleIcon
                        width={24}
                        className="fill-pink-200 group-active:fill-pink-100"
                        iconSide="left"
                    /></button
                >
                <button
                    on:click={() => changeSlide(1)}
                    class="group hover:translate-x-1 transition-all px-3 py-5 active:bg-pink-100/5 rounded-lg"
                    ><AngleIcon
                        width={24}
                        className="fill-pink-200 group-active:fill-pink-100"
                        iconSide="right"
                    /></button
                >
            </div>
            <button
                on:click={closeLightBox}
                class="absolute z-50 bg-pink-100/10 hover:bg-pink-100/20 active:bg-pink-100/5 focus:bg-pink-100/5 top-14 right-5 text-xl rounded-full p-3"
                aria-label="Close"
            >
                <CloseIcon width={24} className="fill-pink-100" />
            </button>
        </div>
    </div>
{/if}
