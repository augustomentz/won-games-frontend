import { Meta, Story } from '@storybook/react/types-6-0'
import Slider from '.'

export default {
	title: 'Slider',
	component: Slider
} as Meta

export const Default: Story = (args) => <Slider {...args} />
