<script>
  import NavLink from "./nav/NavLink.svelte";
  import HamburguerIcons from "./icons/Hamburguer.svelte";

  export let currentPathName;
  export let logoUrl;
  export let pageName;

  let className = "invisible top-10 scale-95 opacity-0";
  let isOpen = false;

  function onClick() {
    isOpen = !isOpen;
    className = "visible top-12 scale-100 opacity-100";
    if (!isOpen) {
      className = "invisible top-10 scale-95 opacity-0";
    }
  }
</script>

<header class="bg-pink relative w-full z-50">
  <div
    class="container relative max-w-screen-xl h-[55px] lg:h-fit flex md:flex-row items-center justify-between mx-auto pl-5 lg:pl-6 lg:pr-1"
  >
    <picture
      class="w-full md:w-1/2 flex flex-row justify-start items-center gap-2 md:gap-3"
    >
      <a title="Ir al inicio" href="/">
        <img
          alt="Logo"
          class="inline transition-all hover:scale-110 hover:brightness-110 active:brightness-100"
          width="40"
          height="40"
          src={logoUrl}
        />
      </a>
      <span class="text-sm md:text-base">/</span>
      <p class="w-full text-sm md:text-base text-pink-100 font-medium">
        {pageName}
      </p>
    </picture>
    <button on:click={onClick} class="block lg:hidden p-5 focus:bg-pink-100/5">
      {#if !isOpen}
        <HamburguerIcons width={16} className="fill-pink-100" />
      {:else}
        <HamburguerIcons closeIcon width={16} className="fill-pink-100" />
      {/if}
    </button>
    <nav
      class="{className} w-[200px] lg:w-1/2 absolute lg:relative lg:visible lg:top-0 right-5 lg:right-0 transition-all ease-in duration-100 lg:opacity-100 lg:scale-100 z-10"
    >
      <ul
        class="w-full overflow-hidden flex flex-col lg:flex-row lg:justify-end lg:p-0 bg-pink border lg:border-none border-pink-200/10 lg:bg-pink rounded-xl lg:rounded-none shadow-xl"
      >
        <NavLink
          text="Información"
          link="/"
          linkTitle="Ir al inicio"
          activeUrl={currentPathName}
        />
        <NavLink
          text="Portafolio"
          link="/portafolio/"
          linkTitle="Visitar el portafolio"
          activeUrl={currentPathName}
        />
        <NavLink
          text="Blog"
          link="/blog/"
          linkTitle="Ir al blog"
          activeUrl={currentPathName}
        />
      </ul>
    </nav>
  </div>
</header>
