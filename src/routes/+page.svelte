<script>
	import Card from '$lib/components/Card.svelte';
	let { data } = $props();
	const { employees } = data;
</script>

<div class="flex flex-wrap">
	{#each employees as employee}
		<Card image="https://placehold.co/100x100" name={employee.name} dateOfBirth={employee.dateOfBirth}></Card>
	{/each}
</div>
