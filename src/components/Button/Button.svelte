<button
        on:click={onClick}
        class='button'
>
    <span class='text'>{text}</span>
</button>

<style>

</style>

<script>
    let params;

    const { text, onClick } = params;

    export {
        params
    }
</script>
