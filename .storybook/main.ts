import { type StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: ['@chromatic-com/storybook', '@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-vitest'],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|scss)',
    {
      directory: '../src/components',
      files: '**/*.stories.@(js|jsx|mjs|ts|tsx|scss)',
      titlePrefix: 'Components',
    },
    {
      directory: '../src/views',
      files: '**/*.stories.@(js|jsx|mjs|ts|tsx|scss)',
      titlePrefix: 'Views',
    },
  ],
};

export default config;
