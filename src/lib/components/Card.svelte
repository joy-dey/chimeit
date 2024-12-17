<script>
	export let image;
	export let name;
	export let dateOfBirth;

	function formatDate(dateString) {
		const date = new Date(dateString);
		const options =  { month: 'long', day: 'numeric' };
		return date.toLocaleDateString('en-US', options);
	}
</script>

<article class="bg-red flex justify-center items-center max-w-30 flex-col gap-2 p-4 text-center">
	<figure class="relative">
		<img src={image} alt="Avatar of {name}" class="rounded-3xl" width="100" height="100" />
		<figcaption class="absolute -bottom-2 w-full">
            <span class="bg-pink-500 text-white px-2 py-1 rounded-3xl border-2 border-white">7 days</span>
        </figcaption>
	</figure>
	<section class="mt-3">
        <p class="font-semibold text-center text-lg leading-none truncate max-w-24 mx-auto lg:w-max">{name}</p>
        <small class="text-xs">{formatDate(dateOfBirth)}</small>
    </section>
</article>
