<script>
    export let text;
    export let link;
    export let linkTitle;
</script>

<li
    class="flex font-medium bg-pink-900/5 hover:bg-velvet-900/25 text-pink-200 hover:text-pink-50 hover:underline underline-offset-2"
>
    <a class="w-full px-5 py-4 h-max" title="Ir a {linkTitle}" href={link}
        >{text}</a
    >
</li>
