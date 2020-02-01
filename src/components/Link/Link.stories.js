import { storiesOf } from '@storybook/svelte';

import Link from './Link.svelte';

storiesOf('Link')
    .add('Standart', () => ({
        Component: Link,
        props: {
            selected: false,
            params: {
                url: 'order',
                text: 'Сделать заказ'
            }
        }
    }))
    .add('Selected', () => ({
        Component: Link,
        props: {
            selected: true,
            params: {
                url: 'order',
                text: 'Сделать заказ'
            }
        }
    }));
