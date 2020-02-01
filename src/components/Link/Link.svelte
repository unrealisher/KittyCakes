<a class='link' href={url} class:selected={selected} rel=prefetch>{text}</a>

<style>
    .link {
        position: relative;
        color: black;
    }

    .link::after {
        content: '';
        position: absolute;

        top: 100%;
        left: 2px;

        width: 0;
        height: 2px;

        background: var(--color-light-blue);

        border-radius: var(--border-radius-xs);

        transition: width var(--ease-hide) var(--time-s);
    }

    .link:hover,
    .link:focus {
        opacity: .8;
    }

    .link:hover::after,
    .link:focus::after {
        width: calc(100% - 4px);

        transition: width var(--ease-show) var(--time-s);
    }

    .link.selected::after {
        width: calc(100% - 2px);
        background: var(--color-magenta);
    }
</style>

<script>
    let params = {};
    let selected;

    const { url, text } = params;

    export {
        selected,
        params
    }
</script>
