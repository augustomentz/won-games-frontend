import { initApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'

import { GamesMapper, HighlightMapper } from 'utils/mappers'

import Wishlist, { WishlistProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'

export default function WishlistPage(props: WishlistProps) {
	return <Wishlist {...props} />
}

export async function getStaticProps() {
	const apolloClient = initApollo()

	const { data } = await apolloClient.query<QueryRecommended>({
		query: QUERY_RECOMMENDED
	})

	return {
		props: {
			games: gamesMock,
			recommendedTitle: data.recommended?.section?.title,
			recommendedGames: GamesMapper(data.recommended?.section?.games),
			recommendedHighlight: HighlightMapper(
				data.recommended?.section?.highlight
			)
		}
	}
}
