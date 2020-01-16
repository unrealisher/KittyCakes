<a class='link' href={url} class:selected={selected} rel=prefetch>{text}</a>

<style>
    .link {
        color: white;
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
