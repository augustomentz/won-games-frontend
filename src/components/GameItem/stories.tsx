import { Meta, Story } from '@storybook/react/types-6-0'
import GameItem, { GameItemProps } from '.'

export default {
	title: 'Game/GameItem',
	component: GameItem,
	parameters: {
		backgrounds: {
			default: 'won-dark'
		}
	},
	args: {
		img: 'https://source.unsplash.com/user/willianjusten/151x70',
		title: 'Red Dead Redemption 2',
		price: 'R$ 215,00'
	}
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = (args) => (
	<GameItem {...args} />
)

WithPayment.args = {
	downloadLink: 'https://wongames.com/game/download/3232D?dSDS',
	paymentInfo: {
		flag: 'mastercard',
		img: '/img/mastercard.png',
		number: '**** **** **** 4326',
		purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
	}
}
