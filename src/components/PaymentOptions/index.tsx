import { useState } from 'react'
import { Add, ShoppingCart } from '@styled-icons/material-outlined'

import Heading from 'components/Heading'
import Radio from 'components/Radio'
import Button from 'components/Button'

import * as S from './styles'

export type PaymentCard = {
	number: string
	flag: string
	img: string
}

export type PaymentOptionsProps = {
	cards?: PaymentCard[]
	handlePayment: () => void
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
	const [checked, setChecked] = useState(false)

	return (
		<S.Wrapper>
			<S.Body>
				<Heading color="black" size="small" lineBottom>
					Payment
				</Heading>

				<S.CardsList>
					{cards?.map((card) => (
						<S.CardItem key={card.number}>
							<S.CardInfo>
								<S.CardImage src={card.img} alt={card.flag} role="image" />
								{card.number}
							</S.CardInfo>
							<Radio
								name="credit-card"
								id={card.number}
								value={card.number}
								onCheck={() => setChecked(true)}
							/>
						</S.CardItem>
					))}

					<S.AddCard role="button">
						<Add size={20} /> Add a new credit card
					</S.AddCard>
				</S.CardsList>
			</S.Body>

			<S.Footer>
				<Button as="a" fullWidth minimal>
					Continue shopping
				</Button>

				<Button
					fullWidth
					icon={<ShoppingCart />}
					onClick={handlePayment}
					disabled={!checked}
				>
					Buy now
				</Button>
			</S.Footer>
		</S.Wrapper>
	)
}

export default PaymentOptions
