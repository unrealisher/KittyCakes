import { storiesOf } from '@storybook/svelte';

import Nav from './Nav.svelte';

storiesOf('Navigation')
    .add('Home tab', () => ({
        Component: Nav,
    }))
    .add('About tab', () => ({
        Component: Nav,
        props: {
            segment: 'about'
        }
    }));
