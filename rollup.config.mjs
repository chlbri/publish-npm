import externals from 'rollup-plugin-node-externals';
import tsConfigPaths from 'rollup-plugin-tsconfig-paths';
import typescript from 'rollup-plugin-typescript2';

const tsconfig = 'tsconfig.build.json';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'src/index.ts',

  plugins: [
    tsConfigPaths({ tsConfigPath: tsconfig }),
    typescript({ tsconfig }),
    externals({}),
  ],

  output: [
    {
      format: 'es',
      file: 'lib/index.d.ts',
    },
    {
      format: 'cjs',
      sourcemap: true,
      dir: `lib`,
      preserveModulesRoot: 'src',
      preserveModules: true,
      entryFileNames: '[name].js',
    },
    {
      format: 'es',
      sourcemap: true,
      dir: `lib`,
      preserveModulesRoot: 'src',
      preserveModules: true,
      entryFileNames: '[name].mjs',
    },
  ],
};
