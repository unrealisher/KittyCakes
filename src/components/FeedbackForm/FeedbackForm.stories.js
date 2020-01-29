import { storiesOf } from '@storybook/svelte';

import FeedbackForm from './FeedbackForm.svelte';

storiesOf('FeedbackForm')
    .add('Standart', () => ({
        Component: FeedbackForm
    }));
