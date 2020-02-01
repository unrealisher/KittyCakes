<header class='header'>
    <navigation>
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
        width: 100%;
    }

    .list {
        display: flex;

        padding: var(--gap-size-xl);
    }

    .item {

    }

    .item:not(:last-child) {
        margin-right: var(--gap-size-xl);
    }
</style>


<script>
    import Link from '../Link/Link.svelte';

    export let segment;
</script>
