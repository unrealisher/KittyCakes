import { storiesOf } from '@storybook/svelte';

import Button from './Button.svelte';

storiesOf('Button')
    .add('Standart', () => ({
        Component: Button,
        props: {
            params: {
                text: 'Отправить',
            }
        }
    }))
    .add('Custom', () => ({
        Component: Button,
        props: {
            params: {
                text: 'Custom',
                color: 'light-blue',
                size: 'l'
            }
        }
    }));
