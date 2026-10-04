# @koslibs/icons

Общие React SVG-компоненты для разных проектов. Storybook содержит один каталог с поиском по названию, выбором размера и цвета и копированием точечного импорта.

Сборка библиотеки и Storybook — `@koslibs/builder`; TypeScript, lint, форматирование, hooks и релизы — `@koslibs/configs`. Node.js: `24.13.0` или новее. Генераторов и локальных служебных скриптов нет.

## Использование

```tsx
import { ChevronDownIcon } from '@koslibs/icons/ChevronDownIcon';

<ChevronDownIcon width={24} height={24} color="rebeccapurple" aria-hidden="true" />;
<ChevronDownIcon width="1em" height="1em" aria-label="Развернуть" />;
```

Каждый точечный экспорт в `package.json` указывает прямо на JS-модуль соответствующей иконки. Остальные иконки не входят в граф зависимостей такого импорта, включая сборку без tree shaking. Также доступны корневые именованные экспорты из `@koslibs/icons`; для них исключение неиспользуемых иконок зависит от tree shaking сборщика.

Компоненты принимают стандартные `SVGProps<SVGSVGElement>`: `width`, `height`, `color`, `className`, `style`, SVG-атрибуты и события. Размер по умолчанию и viewBox определены в каждом компоненте. Одноцветная геометрия использует `currentColor`. Декоративные иконки помечай `aria-hidden="true"`; доступное имя задавай через `aria-label` либо внешнюю подпись `aria-labelledby`. Для кнопки с иконкой задавай имя кнопке и оставляй иконку декоративной.

Пакет поддерживает React `18.3.1` и `19`, публикует ESM и автоматически собранные `.d.ts`. Ручных типов для иконок, общей обёртки и фабрики нет. Storybook не входит в npm-пакет.

## Локальная работа

```sh
npm ci
npm run storybook      # http://localhost:6016
npm run build          # JS и декларации в dist
npm run typecheck
npm run lint
npm run lint:fix
npm test               # сборка, проверка экспорта и consumer-бандла
npm run build-storybook
npm pack --dry-run
```

Каталог получает список компонентов из `src/index.ts`; отдельного реестра или генерации нет. После изменений интерфейса проверь поиск, выбор размера и цвета и копирование импорта вручную через `npm run storybook`.

## Добавление иконки

1. Добавь файл `src/icons/arrow-left-icon.tsx` со стандартными SVG props и компонентом `ArrowLeftIcon`. Все файлы иконок заканчиваются на `-icon.tsx`, компоненты — на `Icon`. Story-файлы имеют суффикс `.stories.tsx` и не попадают в библиотеку.
2. Добавь именованный экспорт в `src/index.ts`:

```ts
export { ArrowLeftIcon } from './icons/arrow-left-icon.js';
```

3. Добавь точечный экспорт в `package.json`:

```json
"./ArrowLeftIcon": {
    "types": "./dist/icons/arrow-left-icon.d.ts",
    "import": "./dist/icons/arrow-left-icon.js"
}
```

После этого иконка появится в каталоге. Проверки подтверждают соответствие файлов, экспортов и типов, а также отсутствие остальных иконок в consumer-бандле с точечным импортом. Сохраняй исходную геометрию и viewBox. Для SVG с clipPath, масками и градиентами используй уникальные ID через React `useId`, как в `TrophyIcon`.

## GitHub Pages

Workflow `.github/workflows/pages.yml` проверяет библиотеку, собирает статический Storybook и публикует Pages artifact при push в `main` или ручном запуске. Адрес назначения: <https://koslibs.github.io/icons/>; готовность сайта определяется успешным деплоем.

В репозитории выбери **Settings → Pages → Build and deployment → Source: GitHub Actions**. Workflow использует environment `github-pages`. Инструкция: [custom workflows for Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Релизы

Перед коммитом изменения публичной библиотеки выполни `npm run changeset`. Shared Lefthook проверяет Changesets перед push. Для `main` настрой обязательные проверки **Changeset required** и **validate**.

Shared release workflow `koslibs/configs` после push в `main` применяет Changesets, обновляет версию и changelog и публикует npm-пакет. Для публикации настрой npm Trusted Publisher для `koslibs/icons`, workflow `release.yml`, либо repository secret `NPM_TOKEN` с правом публикации в scope `@koslibs`. Actions должны иметь право записывать release-коммиты и теги.

## Структура

- `src/icons/` — SVG-компоненты и один story-файл.
- `src/index.ts` — публичные именованные экспорты.
- `src/catalog/` — интерфейс каталога для Storybook.
- `tests/` — проверки компонентов, публичных экспортов и consumer-бандла.
- `.github/workflows/` — CI, Pages, Changesets и npm release.

Референс: [core-ds/icons](https://github.com/core-ds/icons).
