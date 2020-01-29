<label>{label}
    {#if multilines}
        <textarea bind:value={value} {placeholder}></textarea>
    {:else}
        <input type='text' {placeholder} bind:value={value}>
    {/if}
</label>

<style></style>

<script>
    let params = {};
    let value;
    const { label, placeholder, multilines } = params;

    export {
        value,
        params
    };
</script>
