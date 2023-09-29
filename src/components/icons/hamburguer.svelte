<script>
    export let width;
    export let closeIcon = false;
    export let classes = "";
</script>

{#if !closeIcon}
    <svg
        class={classes}
        {width}
        height="auto"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0 0H16V2H0V0ZM0 5H16V7H0V5ZM16 10H0V12H16V10Z" />
    </svg>
{:else}
    <svg
        class={classes}
        {width}
        height="auto"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clip-path="url(#clip0_727_155)">
            <path
                d="M0 0H2V2H0V0ZM4 4H2V2H4V4ZM6 6H4V4H6V6ZM8 6H6V8H4V10H2V12H0V14H2V12H4V10H6V8H8V10H10V12H12V14H14V12H12V10H10V8H8V6ZM10 4V6H8V4H10ZM12 2V4H10V2H12ZM12 2V0H14V2H12Z"
            />
        </g>
        <defs>
            <clipPath id="clip0_727_155">
                <rect {width} height={width} fill="white" />
            </clipPath>
        </defs>
    </svg>
{/if}
