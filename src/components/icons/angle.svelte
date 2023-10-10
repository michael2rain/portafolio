<script lang="ts">
    interface $$Props {
        width: number;
        className?: string;
        iconSide?: "left" | "right";
    }

    export let width = 0;
    export let className = "";
    export let iconSide = "";
</script>

<svg
    class="{className} {iconSide == 'left' ? 'rotate-180' : 'rotate-0'}"
    {width}
    height={width + 6}
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M0 0V2H2V0H0ZM4 4V2H2V4H4ZM6 6V4H4V6H6ZM6 8H8V6H6V8ZM4 10V8H6V10H4ZM4 10H2V12H4V10ZM0 14V12H2V14H0Z"
    />
</svg>
