import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { cp, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { promisify } from 'node:util';

import { it } from '@koslibs/builder/rstest';

it('resolves each public subpath and bundles one icon without tree shaking', async () => {
    const project = process.cwd();
    const cache = resolve(project, '.cache');
    await mkdir(cache, { recursive: true });
    const fixture = await mkdtemp(join(cache, 'icon-import-test-'));
    const require = createRequire(join(project, 'package.json'));
    const builder = join(
        dirname(require.resolve('@koslibs/builder/package.json')),
        'dist/cli/index.js'
    );
    const run = promisify(execFile);
    try {
        await cp(join(project, 'dist'), join(fixture, 'dist'), { recursive: true });
        await cp(join(project, 'package.json'), join(fixture, 'package.json'));
        const pkg = JSON.parse(await readFile(join(fixture, 'package.json'), 'utf8'));
        const subpaths = Object.keys(pkg.exports).filter((key) => /^\.\/[A-Z]/.test(key));
        await writeFile(
            join(fixture, 'resolve.mjs'),
            `for (const subpath of ${JSON.stringify(subpaths)}) {
                const name = subpath.slice(2);
                const module = await import('@koslibs/icons/' + name);
                if (typeof module[name] !== 'function' || module.default !== module[name]) {
                    throw new Error('Invalid export: ' + name);
                }
            }\n`
        );
        await run(process.execPath, [join(fixture, 'resolve.mjs')], { cwd: fixture });
        await writeFile(
            join(fixture, 'consumer.ts'),
            "import { ChevronDownIcon } from '@koslibs/icons/ChevronDownIcon';\nconsole.info(ChevronDownIcon);\n"
        );
        await writeFile(
            join(fixture, 'tsconfig.json'),
            JSON.stringify({
                extends: '@koslibs/configs/tsconfig',
                include: ['consumer.ts'],
            })
        );
        await writeFile(
            join(fixture, 'koslibs-builder.ts'),
            `export default { rsbuildConfig: {
                source: { entry: { index: './consumer.ts' } },
                output: { distPath: { root: 'consumer-dist' }, minify: false },
                tools: { rspack: { optimization: { usedExports: false, sideEffects: false } } }
            } };\n`
        );
        try {
            await run(process.execPath, [builder, 'ui:build', '--root', fixture], {
                cwd: fixture,
                timeout: 30000,
            });
        } catch (error) {
            throw new Error(`Consumer build failed:\n${error.stdout}\n${error.stderr}`, {
                cause: error,
            });
        }
        const files = await readdir(join(fixture, 'consumer-dist'), { recursive: true });
        const chunks = await Promise.all(
            files
                .filter((file) => file.endsWith('.js'))
                .map((file) => readFile(join(fixture, 'consumer-dist', file), 'utf8'))
        );
        const bundle = chunks.join('\n');
        assert.match(bundle, /chevron-down-icon\.js/);
        for (const subpath of subpaths.filter((key) => key !== './ChevronDownIcon')) {
            const filename = pkg.exports[subpath].import.split('/').at(-1);
            assert(!bundle.includes(filename), `Unexpected icon in consumer bundle: ${filename}`);
        }
    } finally {
        const insideCache = relative(cache, fixture);
        assert(insideCache.startsWith('icon-import-test-') && !insideCache.includes(sep));
        await rm(fixture, { recursive: true, force: true });
    }
}, 60000);
