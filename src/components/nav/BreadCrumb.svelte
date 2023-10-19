<script lang="ts">
    interface $$Props {
        pathname: string;
        currenPage: string;
        className: string;
    }

    export let className = "";
    export let pathname;
    export let currenPage;

    const pathParts = pathname.split("/").filter((part) => {
        return part !== "";
    });
</script>

<ol
    class="{className} flex flex-row items-center gap-3 text-pink-200 font-medium text-sm md:text-base"
>
    {" / "}
    {#if pathParts.length <= 1}
        <li>{currenPage}</li>
    {:else}
        {#each pathParts as part, index (part)}
            {#if index < pathParts.length - 1}
                <li class="w-fit flex-none line-clamp-1">
                    <a
                        class="capitalize hover:underline hover:text-pink-100"
                        href={pathname.substring(
                            0,
                            pathname.indexOf(part) + part.length
                        )}
                    >
                        {part}
                    </a>
                </li>
                {" / "}
                <li class="flex-auto text-pink-100/80 line-clamp-1">
                    {currenPage}
                </li>
            {/if}
        {/each}
    {/if}
</ol>
