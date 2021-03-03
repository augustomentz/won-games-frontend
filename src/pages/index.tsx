import { initApollo } from 'utils/apollo'
import { BannersMapper, GamesMapper, HighlightMapper } from 'utils/mappers'

import Home, { HomeTemplateProps } from 'templates/Home'

import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
	return <Home {...props} />
}

// getStaticProps => Gerar estático em build time
// getServerSideProps => Gerar via SSR a cada request (nunca vai para o bundle do client)
// getInitialProps => Gerar via SSR a cada request (vai para o bundle do client, faza hydrate do lado do client depois do 1 req)
export async function getStaticProps() {
	const apolloClient = initApollo()
	const TODAY = new Date().toISOString().slice(0, 10)

	const {
		data: { banners, newGames, upcomingGames, freeGames, sections }
	} = await apolloClient.query<QueryHome, QueryHomeVariables>({
		query: QUERY_HOME,
		variables: { date: TODAY }
	})

	return {
		props: {
			revalidate: 10,
			banners: BannersMapper(banners),
			newGamesTitle: sections?.newGames?.title,
			gamesSlider: GamesMapper(newGames),
			mostPopularGamesTitle: sections?.popularGames?.title,
			mostPopularHighlight: HighlightMapper(sections?.popularGames?.highlight),
			mostPopularGames: GamesMapper(sections!.popularGames!.games),
			upcomingGamesTitle: sections?.upcomingGames?.title,
			upcomingHighlight: HighlightMapper(sections?.upcomingGames?.highlight),
			upcomingGames: GamesMapper(upcomingGames),
			freeGamesTitle: sections?.freeGames?.title,
			freeHighligth: HighlightMapper(sections?.freeGames?.highlight),
			freeGames: GamesMapper(freeGames)
		}
	}
}

// Métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES
