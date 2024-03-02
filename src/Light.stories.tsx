import type { Meta, StoryObj } from "@storybook/react";

import Light from './Light';

const meta: Meta<typeof Light> = {
    component: Light,
    title: 'Light',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control : { type: 'select' },
            options: ['green', 'yellow', 'red']
        }
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        variant: 'green',
    }
}

export const Red: Story = {
    args: {
        variant: 'red',
    }
}

export const Yellow: Story = {
    args: {
        variant: 'yellow',
    }
}

// Custom render functions
export const Another: Story = {
    // args: {
    //     variant: 'red'
    // },
    render: (args) => <div style ={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        border: '5px solid black',
        width: 'max-content',
        padding: 10,
        background: 'grey'
    }}>
        <Light variant="red" />
        <Light variant="yellow" />
        <Light variant="green" />
        </div>,
}
