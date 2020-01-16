import { storiesOf } from '@storybook/svelte';

import Header from './Header.svelte';

storiesOf('Header')
    .add('Standart', () => ({
        Component: Header,
        props: {
            segment: 'order'
        }
    }));
