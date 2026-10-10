# @koslibs/icons

## 1.2.0

### Minor Changes

- [#5](https://github.com/koslibs/icons/pull/5) [`59789df`](https://github.com/koslibs/icons/commit/59789df7ae62995a0a86c648e9c4e27c6f91e76e) Thanks [@holypower777](https://github.com/holypower777)! - Add SearchIcon, DotsIcon, ArchiveIcon, and PenIcon from the Figma library. Each icon uses an 18×18 canvas and a 1 px stroke, supports standard SVG props, and is available through an individual package import.

## 1.1.0

### Minor Changes

- [#4](https://github.com/koslibs/icons/pull/4) [`6247f2b`](https://github.com/koslibs/icons/commit/6247f2b2b4fcc0188fb4efd82f0811b8f2e5cd60) Thanks [@holypower777](https://github.com/holypower777)! - Sync the icon collection with Figma: use an 18 x 18 default canvas and viewBox, normalize line icons to a 1 px stroke at that size, and add CogIcon, TickIcon, PlusIcon, ChevronRightIcon, and CrossIcon with direct imports. Preserve the larger inner drawings of the new action icons, currentColor support, and standard SVG props without redundant clipping or runtime IDs.

## 1.0.1

### Patch Changes

- [#3](https://github.com/koslibs/icons/pull/3) [`8be1648`](https://github.com/koslibs/icons/commit/8be1648a70190140f61114572e295e21a7f4db9f) Thanks [@holypower777](https://github.com/holypower777)! - Update shared build, lint, and release tooling to @koslibs/builder 1.0.0 and @koslibs/configs 1.0.0, refresh the lockfile to remove known dependency vulnerabilities, update the shared GitHub workflows, and enable TypeScript 6 compatibility.

## 1.0.0

### Major Changes

- [`cb67e84`](https://github.com/koslibs/icons/commit/cb67e840829734eefc522dcfa6664911a5799789) Thanks [@holypower777](https://github.com/holypower777)! - Replace the custom icon wrapper and generation scripts with standalone SVG components, explicit icon exports, and one searchable Storybook catalog. Normalize icon filenames to the -icon.tsx convention. Remove project-owned browser tests and Chromium installation from CI while retaining library checks and the static Storybook build.

### Minor Changes

- [#2](https://github.com/koslibs/icons/pull/2) [`f1d13d5`](https://github.com/koslibs/icons/commit/f1d13d5a70474c53db37e7674b5c525117b44e29) Thanks [@holypower777](https://github.com/holypower777)! - Add RotateCwIcon from Figma with standard SVG props, a direct @koslibs/icons/RotateCwIcon export, and automatic inclusion in the Storybook catalog.

- [`cb67e84`](https://github.com/koslibs/icons/commit/cb67e840829734eefc522dcfa6664911a5799789) Thanks [@holypower777](https://github.com/holypower777)! - Expose PascalCase icon subpaths such as @koslibs/icons/ChevronDownIcon and use individual imports in the Storybook catalog.

- [`cb67e84`](https://github.com/koslibs/icons/commit/cb67e840829734eefc522dcfa6664911a5799789) Thanks [@holypower777](https://github.com/holypower777)! - Add shared React SVG components, a searchable Storybook catalog, and GitHub Pages deployment infrastructure.

### Patch Changes

- [#1](https://github.com/koslibs/icons/pull/1) [`67cd6dd`](https://github.com/koslibs/icons/commit/67cd6dd0ecdf2f14e62d196a531061a2dcb84624) Thanks [@holypower777](https://github.com/holypower777)! - remove redundant readme details

- [#2](https://github.com/koslibs/icons/pull/2) [`f1d13d5`](https://github.com/koslibs/icons/commit/f1d13d5a70474c53db37e7674b5c525117b44e29) Thanks [@holypower777](https://github.com/holypower777)! - Remove redundant SVG clipping and React useId calls from the icons while preserving their paths and viewBox values.
