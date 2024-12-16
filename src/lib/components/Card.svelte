<script>
	export let image;
	export let name;
</script>

<article class="bg-red flex justify-center items-center max-w-36 flex-col gap-2 p-5 text-center">
	<figure class="relative">
		<img src={image} alt="Avatar of {name}" class="rounded-3xl" />
		<figcaption class="absolute -bottom-2 w-full">
            <span class="bg-pink-500 text-white px-2 py-1 rounded-3xl border-2 border-white">7 days</span>
        </figcaption>
	</figure>
	<section class="mt-3">
        <p class="font-semibold text-lg leading-none">{name}</p>
        <small class="text-xs">December 25</small>
    </section>
</article>
