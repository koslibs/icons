import type { Meta, StoryObj } from '@koslibs/builder/storybook';

import { Catalog } from '../catalog/catalog.js';

const meta = {
    title: 'Icons/Icon',
    component: Catalog,
    parameters: { layout: 'fullscreen', controls: { disable: true } },
} satisfies Meta<typeof Catalog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icons: Story = { name: 'Все иконки' };
