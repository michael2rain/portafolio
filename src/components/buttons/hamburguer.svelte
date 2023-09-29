<script>
    import HammyButton from "../icons/hamburguer/hamburguer.astro";
    import HammyClosed from "../icons/hamburguer/hammyClosed.astro";
</script>

<button on:click id="hammyButton" class="block lg:hidden p-5">
    <HammyButton />
    <HammyClosed />
</button>
