import { Meta, Story } from '@storybook/react/types-6-0'
import Highlight from '.'

export default {
	title: 'Highlight',
	component: Highlight
} as Meta

export const Default: Story = (args) => <Highlight {...args} />
