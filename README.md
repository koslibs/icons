# @koslibs/icons

Общие React SVG-компоненты для разных проектов. Storybook содержит один каталог с поиском по названию, выбором размера и цвета и копированием точечного импорта.

Демо: <https://koslibs.github.io/icons/>

## Использование

```tsx
import { ChevronDownIcon } from '@koslibs/icons/ChevronDownIcon';

<ChevronDownIcon width={24} height={24} color="rebeccapurple" aria-hidden="true" />;
<ChevronDownIcon width="1em" height="1em" aria-label="Развернуть" />;
```

Каждый точечный экспорт в `package.json` указывает прямо на JS-модуль соответствующей иконки. Остальные иконки не входят в граф зависимостей такого импорта, включая сборку без tree shaking. Также доступны корневые именованные экспорты из `@koslibs/icons`; для них исключение неиспользуемых иконок зависит от tree shaking сборщика.

Компоненты принимают стандартные `SVGProps<SVGSVGElement>`: `width`, `height`, `color`, `className`, `style`, SVG-атрибуты и события. Все иконки имеют размер по умолчанию 18 × 18 и `viewBox="0 0 18 18"`. Обводка линейных иконок — 1 px при размере 18 × 18 и масштабируется вместе с SVG. Иконки с заливкой сохраняют исходную геометрию. Одноцветная геометрия использует `currentColor`. Декоративные иконки помечай `aria-hidden="true"`; доступное имя задавай через `aria-label` либо внешнюю подпись `aria-labelledby`. Для кнопки с иконкой задавай имя кнопке и оставляй иконку декоративной.

Пакет поддерживает React `18.3.1` и `19`, публикует ESM и автоматически собранные `.d.ts`. Ручных типов для иконок, общей обёртки и фабрики нет. Storybook не входит в npm-пакет.

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

После этого иконка появится в каталоге. Проверки подтверждают соответствие файлов, экспортов и типов, а также отсутствие остальных иконок в consumer-бандле с точечным импортом. Сохраняй исходную геометрию и viewBox.
