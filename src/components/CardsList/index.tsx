import * as S from './styles'

import Heading from 'components/Heading'
import { PaymentCard } from 'components/PaymentOptions'

export type CardsListProps = {
	cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardsListProps) => (
	<>
		<Heading color="black" lineBottom size="small">
			My Cards
		</Heading>

		{cards?.map((card) => (
			<S.Card key={card.number}>
				<img src={card.img} alt={card.flag} />
				<span>{card.number}</span>
			</S.Card>
		))}
	</>
)

export default CardsList
