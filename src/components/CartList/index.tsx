import Link from 'next/link'

import GameItem, { GameItemProps } from 'components/GameItem'
import Button from 'components/Button'
import Empty from 'components/Empty'

import * as S from './styles'

export type CartListProps = {
	items?: GameItemProps[]
	total?: string
	hasButton?: boolean
}

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => (
	<S.Wrapper isEmpty={items.length < 1}>
		{items.length > 0 ? (
			<>
				{items.map((item) => (
					<GameItem key={item.title} {...item} />
				))}

				<S.Footer>
					{!hasButton && <span>Total:</span>}
					<S.Total>{total}</S.Total>

					{hasButton && (
						<Link href="/cart">
							<Button as="a">Buy it now</Button>
						</Link>
					)}
				</S.Footer>
			</>
		) : (
			<Empty
				title="Your cart is empty"
				description="Go back to the store and explore great games and off"
				hasLink
			/>
		)}
	</S.Wrapper>
)

export default CartList
