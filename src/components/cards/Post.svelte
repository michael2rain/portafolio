<script lang="ts">
    interface $$Props {
        postCat: string;
        postDate: string;
        postTitle: string;
        postExcerpt: string;
        postSlug: string;
        postLectureTime: string;
        postImage: string;
    }

    import { dateFormatDistance } from "../../utils/timeUtils";

    export let postTitle = "";
    export let postCat = "";
    export let postDate = "";
    export let postExcerpt = "";
    export let postSlug = "";
    export let postLectureTime = "";
    export let postImage = "";
</script>

<article
    class="group relative grid grid-cols-[1fr_70px] md:grid-cols-[1fr_120px] gap-x-4 md:gap-x-12 gap-y-3 grid-flow-col bg-velvet-900/10 p-6 pb-4 md:p-9 rounded-2xl transition ease-[cubic-bezier(0.345, 0.115, 0.135, 1.42)] hover:bg-velvet-900/25"
>
    <div class="col-span-1 max-h-min flex flex-row items-center gap-1">
        <svg
            class="fill-pink-200 hidden md:block"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4 4H12V6H22V20H2V4H4ZM20 8H10V6H4V18H20V8Z" />
        </svg>
        <em
            class="w-fit shrink text-pink-200 not-italic text-sm md:text-base line-clamp-1 md:line-clamp-none pl-1"
            >{postCat}</em
        >
        <span class="text-pink-200/75 text-sm md:text-base">-</span>
        <p class="grow text-pink-200/75 text-sm md:text-base line-clamp-1">
            {dateFormatDistance(postDate)}
        </p>
    </div>
    <h3
        class="col-span-1 text-xl md:text-2xl font-medium text-pink-100 pb-2 md:p-0 group-hover:text-pink-50 line-clamp-3"
    >
        <a
            class="after:content-[''] after:absolute after:inset-0"
            href={postSlug}>{postTitle}</a
        >
    </h3>
    <p
        class="col-span-1 text-lg text-pink-200 group-hover:text-pink-100 hidden md:block pb-3 [&>p]:line-clamp-2"
    >
        {@html postExcerpt}
    </p>
    <p class="col-span-1 text-xs md:text-sm text-pink-200/75">
        {postLectureTime}
    </p>
    <img
        class="w-full h-[70px] md:h-[120px] object-cover row-span-4 rounded-lg ring-2 ring-pink-900/25 group-hover:brightness-110"
        width="120"
        height="120"
        src={postImage ?? "/public/images/default.png"}
        alt="Imagen destacada de ${postTitle}"
    />
</article>
