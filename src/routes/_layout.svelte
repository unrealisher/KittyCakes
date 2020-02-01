<Header {segment}/>
<main>
	<slot></slot>
</main>

<script>
	import Header from '../components/Header/Header.svelte';

	export let segment;
</script>

