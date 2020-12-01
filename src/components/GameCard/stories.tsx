import { Meta, Story } from '@storybook/react/types-6-0'
import GameCard from '.'

export default {
	title: 'GameCard',
	component: GameCard
} as Meta

export const Default: Story = (args) => <GameCard {...args} />
