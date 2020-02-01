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

    .input {
        padding: var(--gap-size-xs);
        border-radius: var(--border-radius-xs);

        border: 1px solid var(--color-light-grey);

        transition: var(--time-s) var(--ease-default);

        resize: none;
    }

    .input:hover,
    .input:focus {
        border: 1px solid var(--color-grey);
        transition: var(--time-s) var(--ease-default);
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
