import Link from 'next/link'
import formatPrice from 'utils/format-price'

import {
	Favorite,
	FavoriteBorder,
	AddShoppingCart
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Ribbon from 'components/Ribbon'

import { RibbonColors, RibbonSizes } from 'components/Ribbon'
import * as S from './styles'

export type GameCardProps = {
	slug: string
	title: string
	developer: string
	img: string
	price: number
	promotionalPrice?: number
	favorite?: boolean
	ribbon?: string
	ribbonColor?: RibbonColors
	ribbonSize?: RibbonSizes
	onFav?: () => void
}

const GameCard = ({
	slug,
	title,
	developer,
	img,
	price,
	promotionalPrice,
	favorite = false,
	ribbon,
	ribbonColor = 'primary',
	ribbonSize = 'small',
	onFav
}: GameCardProps) => (
	<S.Wrapper>
		{ribbon && (
			<Ribbon color={ribbonColor} size={ribbonSize}>
				{ribbon}
			</Ribbon>
		)}
		<Link href={`game/${slug}`} passHref>
			<S.ImageBox>
				<img src={img} alt={title} />
			</S.ImageBox>
		</Link>
		<S.Content>
			<Link href={`game/${slug}`} passHref>
				<S.Info>
					<S.Title>{title}</S.Title>
					<S.Developer>{developer}</S.Developer>
				</S.Info>
			</Link>
			<S.FavButton role="button" onClick={onFav}>
				{favorite ? (
					<Favorite aria-label="Remove from Wishlist" />
				) : (
					<FavoriteBorder aria-label="Add to Wishlist" />
				)}
			</S.FavButton>
			<S.BuyBox>
				{!!promotionalPrice && (
					<S.Price isPromotional>{formatPrice(price)}</S.Price>
				)}
				<S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
				<Button icon={<AddShoppingCart />} size="small" />
			</S.BuyBox>
		</S.Content>
	</S.Wrapper>
)

export default GameCard
