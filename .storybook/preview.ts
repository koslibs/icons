import type { Preview } from '@koslibs/builder/storybook';

const preview: Preview = {
    parameters: {
        options: { storySort: { order: ['Icons'] } },
        controls: { matchers: { color: /color$/i } },
    },
};

export default preview;
