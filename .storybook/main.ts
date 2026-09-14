import { type StorybookConfig } from '@storybook/react-vite';

import { autoChromaticSkip } from './plugins/auto-chromatic-skip.ts';

declare const process: { env: Record<string, string | undefined> };

const STORY_EXTENSIONS = '@(js|jsx|mjs|ts|tsx|scss)';

/**
 * Set by `npm run dev` and `npm run build:chromatic` (what `chromatic.config.json`'s
 * `buildScriptName` points Chromatic at) — both need the `*.test.stories.*`/`*.visual.stories.*`
 * files. Plain `npm run build` — the build that gets published as the browsable component docs
 * site — leaves this unset, so it never sees them.
 */
const includeTestsAndVisual = process.env.STORYBOOK_INCLUDE_TESTS === 'true';

/**
 * `*.test.stories.tsx` and `*.visual.stories.tsx` files nest under their component in the
 * sidebar (their own `title` ends in `/Tests`/`/Visual`), same as any other story file. Both
 * are dropped entirely for the public docs build.
 */
const storyEntries = (directory: string, titlePrefix: string) => [
  {
    directory,
    files: includeTestsAndVisual
      ? `**/*.stories.${STORY_EXTENSIONS}`
      : `**/!(*.test|*.visual).stories.${STORY_EXTENSIONS}`,
    titlePrefix,
  },
];

const config: StorybookConfig = {
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-mcp',
    '@storybook/addon-vitest',
  ],
  core: {
    disableTelemetry: true,
  },
  features: {
    experimentalDocgenServer: true,
    experimentalReview: true,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: [
    '../docs/**/*.mdx',
    ...storyEntries('../src/components', 'Components'),
    ...storyEntries('../src/modules', 'Modules'),
    ...storyEntries('../src/views', 'Views'),
  ],
  viteFinal: async (viteConfig) => ({
    ...viteConfig,
    plugins: [...(viteConfig.plugins ?? []), autoChromaticSkip()],
  }),
};

export default config;
