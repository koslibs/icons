import { useState } from 'react';

import * as iconComponents from '../index.js';

import './catalog.css';

const icons = Object.entries(iconComponents)
    .map(([name, Component]) => ({ name, Component }))
    .sort((first, second) => first.name.localeCompare(second.name, 'en'));

export function Catalog() {
    const [query, setQuery] = useState('');
    const [size, setSize] = useState(24);
    const [color, setColor] = useState('#242938');
    const [selected, setSelected] = useState('');
    const [message, setMessage] = useState('');
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const results = icons.filter(({ name }) =>
        terms.every((term) => name.toLowerCase().includes(term))
    );
    const importCode = selected ? `import { ${selected} } from '@koslibs/icons/${selected}';` : '';
    const usageCode = selected
        ? `<${selected} width={${size}} height={${size}} color="${color}" />`
        : '';

    async function copyImport() {
        try {
            await navigator.clipboard.writeText(importCode);
            setMessage('Импорт скопирован');
        } catch {
            setMessage('Не удалось скопировать. Выдели и скопируй код ниже.');
        }
    }

    return (
        <main className="catalog">
            <header className="catalog__header">
                <div>
                    <p className="catalog__eyebrow">@koslibs/icons</p>
                    <h1>Общие иконки</h1>
                    <p className="catalog__intro">
                        Найди иконку, проверь размер и скопируй импорт.
                    </p>
                </div>
                <span className="catalog__count">{icons.length} иконок</span>
            </header>

            <section className="catalog__toolbar" aria-label="Настройки каталога">
                <label className="catalog__search">
                    <span>Поиск</span>
                    <input
                        type="search"
                        placeholder="Название иконки…"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                </label>
                <label>
                    <span>Размер</span>
                    <select value={size} onChange={(event) => setSize(Number(event.target.value))}>
                        {[16, 20, 24, 32, 48].map((value) => (
                            <option key={value} value={value}>
                                {value} px
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    <span>Цвет</span>
                    <input
                        type="color"
                        value={color}
                        onChange={(event) => setColor(event.target.value)}
                    />
                </label>
            </section>

            {selected && (
                <section className="catalog__detail" aria-label="Использование иконки">
                    <div className="catalog__detail-header">
                        <h2>{selected}</h2>
                        <button
                            type="button"
                            onClick={() => {
                                setSelected('');
                                setMessage('');
                            }}
                        >
                            Закрыть
                        </button>
                    </div>
                    <pre>
                        <code>
                            {importCode}
                            {'\n'}
                            {usageCode}
                        </code>
                    </pre>
                    <button type="button" onClick={copyImport}>
                        Копировать импорт
                    </button>
                    <p role="status">{message}</p>
                </section>
            )}

            <p className="catalog__results" role="status">
                Найдено: {results.length}
            </p>
            {results.length === 0 && (
                <section className="catalog__empty">
                    <h2>Иконки не найдены</h2>
                    <p>Попробуй другое название или тег.</p>
                    <button type="button" onClick={() => setQuery('')}>
                        Сбросить поиск
                    </button>
                </section>
            )}
            {results.length > 0 && (
                <div className="catalog__grid">
                    {results.map((icon) => (
                        <button
                            className="catalog__tile"
                            type="button"
                            key={icon.name}
                            aria-pressed={selected === icon.name}
                            onClick={() => {
                                setSelected(icon.name);
                                setMessage('');
                            }}
                        >
                            <span className="catalog__glyph">
                                <icon.Component
                                    width={size}
                                    height={size}
                                    color={color}
                                    aria-hidden="true"
                                />
                            </span>
                            <span>{icon.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </main>
    );
}
