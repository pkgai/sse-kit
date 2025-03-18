import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: { transformer: 'oxc' },
  target: 'node18',
  clean: true,
  format: ['cjs', 'esm'],
  treeshake: true,
  platform: 'node',
  shims: true,
  publint: true,
  unused: { level: 'error', ignore: ['vue'] },
  skipNodeModulesBundle: true,
})
