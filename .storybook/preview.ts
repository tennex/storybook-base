import { type Preview } from '@storybook/react-vite';

import '../src/tokens/reset.scss';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      // Automatically set layout based on story title
      const { title } = context;
      const layout = title.startsWith('Components') ? 'padded' : 'fullscreen';

      context.parameters.layout = layout;

      return Story();
    },
  ],
  parameters: {
    a11y: {
      test: 'error',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: 'alpha',
    },
    options: {
      storySort: {
        order: ['Introduction', 'Docs', 'Components', 'Modules', 'Views'],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
