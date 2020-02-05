<button
        on:click={onClick}
        class='Button {`Button_color_${color}`} {`Button_size_${size}`}'
>
    <span class='text'>{text}</span>
</button>

<style>
    .Button {
        border-radius: var(--border-radius-xs);

        color: white;
    }

    .text {
        position: relative;
    }

    .text::after {
        content: '';
        position: absolute;

        top: 100%;
        left: 2px;

        width: 0;
        height: 2px;

        background: white;

        border-radius: var(--border-radius-xs);

        transition: width var(--ease-hide) var(--time-s);
    }

    .Button:hover .text::after,
    .Button:focus .text::after {
        width: calc(100% - 4px);

        transition: all var(--ease-show) var(--time-s);
    }

    .Button_color_magenta {
        background: var(--color-magenta);
    }

    .Button_color_light-blue {
        background: var(--color-light-blue);
    }

    .Button_size_m {
        padding: var(--gap-size-s) var(--gap-size-m);
    }

    .Button_size_l {
        padding: var(--gap-size-m) var(--gap-size-l);
    }
</style>

<script>
    let params;

    const { text, size='m', color='magenta', onClick } = params;

    export {
        params
    }
</script>
