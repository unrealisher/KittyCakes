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
    }));
