import type { Plugin } from 'vite';

const TEST_MARKER = '.test.stories.';

export const autoChromaticSkip = (): Plugin => ({
  enforce: 'post',
  name: 'auto-chromatic-skip',
  transform(code, id) {
    const [filePath] = id.split('?');

    if (!filePath.includes(TEST_MARKER)) return null;

    const exportMatch = code.match(/export default (\w+);/);

    if (!exportMatch) return null;

    const [statement, identifier] = exportMatch;
    const injected = `${identifier}.parameters = { ...${identifier}.parameters, chromatic: { ...${identifier}.parameters?.chromatic, disableSnapshot: true } };`;

    return { code: code.replace(statement, `${injected}\n${statement}`), map: null };
  },
});
