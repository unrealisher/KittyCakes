<svelte:head>
	<title>KittyCakes</title>
</svelte:head>

<div class='content'>
	<Header></Header>
</div>

<style>
	.content {
		width: 100%;
		height: 100%;

		padding: 20px 30px;

		background: #02072a;

		border-radius: var(--radius-l);

		box-sizing: border-box;
	}
</style>

<script>
	import Header from '../adapters/Header/Header.svelte';

</script>
