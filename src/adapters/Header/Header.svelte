<header class='header'>
    <h1 class='logo'>
        KittyCakes
    </h1>
    <navigation class='navigation'>
        <ul class='list'>
            <li class='item'>
                <Link
                        selected={!segment}
                        params={{
                            url: '../../..',
                            text: 'Главная'
                        }}
                />
            </li>
            <li class='item'>
                <Link
                        selected={segment === 'about'}
                        params={{
                            url: 'about',
                            text: 'О нас'
                        }}
                />
            </li>
            <li class='item'>
                <Link
                        selected={segment === 'order'}
                        params={{
                            url: 'order',
                            text: 'Сделать заказ'
                        }}
                />
            </li>
        </ul>
    </navigation>
</header>


<style>
    .header {
        display: flex;

        justify-content: space-between;
        align-items: baseline;

        width: 100%;

        font-size: var(--font-size-m);
        line-height: var(--line-size-m);
    }

    .logo {
        color: white;

        font-size: var(--font-size-l);
        line-height: var(--line-size-l);
    }

    .navigation {
        flex-grow: 1;
    }

    .list {
        display: flex;

        justify-content: flex-end;
    }

    .item:not(:last-child) {
        margin-right: 5%;
    }
</style>


<script>
    import Link from '../../components/Link/Link.svelte';

    export let segment;
</script>
