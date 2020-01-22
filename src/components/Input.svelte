<label>{label}
    <input type='text' {placeholder} bind:value={value}>
</label>

<style></style>

<script>
    let params = {};
    let value;
    const { label, placeholder } = params;

    export {
        value,
        params
    };
</script>
