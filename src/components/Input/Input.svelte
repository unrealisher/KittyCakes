<label class='label'>
    <span class='text'>{label}</span>
    {#if multilines}
        <textarea class='input' rows='5' {placeholder} bind:value={value}></textarea>
    {:else}
        <input class='input' type='text' {placeholder} bind:value={value}>
    {/if}
</label>

<style>
    .label {
        display: flex;
        flex-direction: column;
    }
</style>

<script>
    let params = {};
    let value;
    const { label, placeholder, multilines } = params;

    export {
        value,
        params
    };
</script>
