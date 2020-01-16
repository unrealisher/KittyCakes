<main class='main'>
	<section class='content'>
		<slot></slot>
	</section>
</main>

<style>
	.main {
		height: 100vh;

		background: var(--main-background);
	}

	.content {
		height: 100%;
		width: 100%;

		padding: 10px;

		background: var(--main-background);

		box-sizing: border-box;
	}

	@media(min-width: 980px) {
		.main {
			display: flex;

			justify-content: center;
			align-items: center;
		}

		.content {
			height: 80%;
			width: 80%;

			border-radius: var(--radius-l);

			box-shadow: 0 0 200px 20px rgba(0, 0, 0, .5);
		}
	}
</style>

<script>
</script>

