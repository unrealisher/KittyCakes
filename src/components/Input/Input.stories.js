import { storiesOf } from '@storybook/svelte';

import Input from './Input.svelte';

storiesOf('Input')
    .add('Standart', () => ({
        Component: Input,
        props: {
            params: {
                label: 'Введите имя:',
                placeholder: 'Софья Петровна'
            }
        }
    }))
    .add('Multilines', () => ({
        Component: Input,
        props: {
            params: {
                label: 'Введите сообщение:',
                placeholder: 'Напишите свои пожелания',
                multilines: true
            }
        }
    }));
