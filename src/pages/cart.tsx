import { initApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'

import { GamesMapper, HighlightMapper } from 'utils/mappers'

import Cart, { CartProps } from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
	return <Cart {...props} />
}

export async function getServerSideProps() {
	const apolloClient = initApollo()

	const { data } = await apolloClient.query<QueryRecommended>({
		query: QUERY_RECOMMENDED
	})

	return {
		props: {
			items: itemsMock,
			total: '$ 430,00',
			cards: cardsMock,
			recommendedTitle: data.recommended?.section?.title,
			recommendedGames: GamesMapper(data.recommended?.section?.games),
			recommendedHighlight: HighlightMapper(
				data.recommended?.section?.highlight
			)
		} as CartProps
	}
}
