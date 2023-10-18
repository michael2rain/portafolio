<script lang="ts">
    interface $$Props {
        text: string;
        link: string;
        linkTitle: string;
        activeUrl: string;
        isActive: boolean;
    }

    export let text = "";
    export let link = "";
    export let linkTitle = "";
    export let activeUrl = "";
    export let isActive = activeUrl === link;
</script>

<li
    class="{isActive
        ? 'bg-pink-100/5 md:bg-pink-100/5'
        : 'md:bg-pink hover:bg-pink-100/5 transition-colors'} flex font-medium text-pink-200 hover:text-pink-50 underline-offset-2"
>
    <a class="w-full px-5 py-4 h-max" title="Ir a {linkTitle}" href={link}
        >{text}</a
    >
</li>
