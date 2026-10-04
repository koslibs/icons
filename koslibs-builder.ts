import type { KoslibsBuilderConfig } from '@koslibs/builder';

const config: KoslibsBuilderConfig = {
    port: 6016,
    rsbuildConfig: {
        source: {
            tsconfigPath: './tsconfig.lib.json',
            entry: {
                index: ['./src/index.ts', './src/icons/**/*-icon.tsx'],
            },
        },
        tools: {
            swc: {
                jsc: { transform: { react: { runtime: 'automatic' } } },
            },
        },
    },
};

export default config;
