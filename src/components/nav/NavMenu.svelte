<script lang="ts">
    import HamburguerIcons from "../icons/Hamburguer.svelte";
    import NavLink from "./NavLink.svelte";

    interface $$Props {
        currentPath: string;
        className: string;
    }

    export let currentPath;
    export let className = null;

    let isMobile = "invisible top-10 scale-95 opacity-0";
    let isOpen = false;

    function onClick() {
        isOpen = !isOpen;
        isMobile = "visible top-12 scale-100 opacity-100";
        if (!isOpen) {
            isMobile = "invisible top-10 scale-95 opacity-0";
        }
    }
</script>

<button
    on:click={onClick}
    class="block lg:hidden p-5 focus:bg-pink-100/5"
    aria-label="Abrir menú para teléfonos"
>
    {#if !isOpen}
        <HamburguerIcons width={16} className="fill-pink-100" />
    {:else}
        <HamburguerIcons closeIcon width={16} className="fill-pink-100" />
    {/if}
</button>
<nav
    class="{isMobile} {className} absolute lg:relative lg:visible lg:top-0 right-5 lg:right-0 transition-all ease-in duration-100 lg:opacity-100 lg:scale-100 z-10"
>
    <ul
        class="w-[200px] lg:w-full overflow-hidden flex flex-col lg:flex-row lg:justify-end lg:p-0 bg-pink border lg:border-none border-pink-200/10 lg:bg-pink rounded-xl lg:rounded-none shadow-xl"
    >
        <NavLink
            text="Inicio"
            link="/"
            linkTitle="Ir al inicio"
            activeUrl={currentPath}
        />
        <NavLink
            text="Portafolio"
            link="/portafolio/"
            linkTitle="Visitar el portafolio"
            activeUrl={currentPath}
        />
        <NavLink
            text="Blog"
            link="/blog/"
            linkTitle="Ir al blog"
            activeUrl={currentPath}
        />
    </ul>
</nav>
