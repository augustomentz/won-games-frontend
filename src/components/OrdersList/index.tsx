import * as S from './styles'

import Heading from 'components/Heading'
import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'

export type OrdersListProps = {
	items?: GameItemProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => (
	<S.Wrapper>
		<Heading lineBottom lineColor="primary" color="black" size="small">
			My orders
		</Heading>

		{items.length ? (
			items?.map((item: GameItemProps) => (
				<GameItem key={item.downloadLink} {...item} />
			))
		) : (
			<Empty
				title="You have no orders yet"
				description="Go back to the store and explore great games and offers"
				hasLink
			/>
		)}
	</S.Wrapper>
)

export default OrdersList
