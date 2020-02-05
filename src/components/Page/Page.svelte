<div class='wrapper'>
    <div class='container'>
        <slot/>
    </div>
</div>

<style>
    .wrapper {
        background: var(--color-light-grey);
    }

    .container {
        box-sizing: border-box;

        max-width: 1280px;
        height: calc(100vh - 64px);

        margin: 0 auto;
        padding: var(--gap-size-xl);

        background: white;
    }
</style>
