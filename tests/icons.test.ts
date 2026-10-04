import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

import { describe, expect, it } from '@koslibs/builder/rstest';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import * as icons from '../dist/index.js';

describe('public icons', () => {
    it('keeps filenames, named components, and direct JS/type exports consistent', () => {
        const pkg = JSON.parse(readFileSync(resolve('package.json'), 'utf8'));
        const files = readdirSync(resolve('src/icons')).filter(
            (file) => file.endsWith('.tsx') && !file.endsWith('.stories.tsx')
        );
        const names: string[] = [];
        for (const file of files) {
            expect(file).toMatch(/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*-icon\.tsx$/);
            const slug = file.slice(0, -4);
            const name = slug
                .split('-')
                .map((part) => part[0].toUpperCase() + part.slice(1))
                .join('');
            expect(name).toMatch(/Icon$/);
            expect(pkg.exports[`./${name}`]).toEqual({
                types: `./dist/icons/${slug}.d.ts`,
                import: `./dist/icons/${slug}.js`,
            });
            expect(readFileSync(resolve(`dist/icons/${slug}.d.ts`), 'utf8')).toContain(name);
            names.push(name);
        }
        expect(Object.keys(icons).sort()).toEqual(names.sort());
        expect(
            Object.keys(pkg.exports)
                .filter((key) => /^\.\/[A-Z]/.test(key))
                .sort()
        ).toEqual(names.map((name) => `./${name}`).sort());
        expect(readdirSync(resolve('dist/icons')).some((file) => file.includes('.stories.'))).toBe(
            false
        );
    });

    it('forwards standard SVG props for every icon', () => {
        for (const Component of Object.values(icons)) {
            const markup = renderToStaticMarkup(
                createElement(Component, {
                    width: 32,
                    height: 32,
                    color: 'tomato',
                    className: 'shared-icon',
                    'aria-hidden': true,
                })
            );
            expect(markup).toContain('<svg');
            expect(markup).toContain('width="32"');
            expect(markup).toContain('height="32"');
            expect(markup).toContain('color="tomato"');
            expect(markup).toContain('class="shared-icon"');
            expect(markup).toContain('aria-hidden="true"');
        }
    });
});
