import * as S from './styles'

import {
	AddShoppingCart,
	FavoriteBorder
} from '@styled-icons/material-outlined'

import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import Button from 'components/Button'

export type GameInfoProps = {
	title: string
	description: string
	price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
	<S.Wrapper>
		<Heading color="black" lineBottom>
			{title}
		</Heading>

		<Ribbon color="secondary">{`$${price}`}</Ribbon>

		<S.Description>{description}</S.Description>

		<S.ButtonsWrapper>
			<Button icon={<AddShoppingCart />} size="large">
				Add to cart
			</Button>
			<Button icon={<FavoriteBorder />} size="large" minimal>
				Wishlist
			</Button>
		</S.ButtonsWrapper>
	</S.Wrapper>
)

export default GameInfo
