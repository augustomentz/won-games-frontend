import { initApollo } from 'utils/apollo'

import Home, { HomeTemplateProps } from 'templates/Home'

import GamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
	return <Home {...props} />
}

// getStaticProps => Gerar estático em build time
// getServerSideProps => Gerar via SSR a cada request (nunca vai para o bundle do client)
// getInitialProps => Gerar via SSR a cada request (vai para o bundle do client, faza hydrate do lado do client depois do 1 req)
export async function getStaticProps() {
	const apolloClient = initApollo()

	const { data } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

	return {
		props: {
			revalidate: 10,
			banners: data.banners.map((banner) => ({
				img: `http://localhost:1337${banner.image?.url}`,
				title: banner.title,
				subtitle: banner.subtitle,
				buttonText: banner.button?.label,
				buttonLink: banner.button?.link,
				...(banner.ribbon && {
					ribbon: banner.ribbon.text,
					ribbonColor: banner.ribbon.color,
					ribbonSize: banner.ribbon.size
				})
			})),
			gamesSlider: GamesMock,
			mostPopularHighlight: HighlightMock,
			mostPopularGames: GamesMock,
			upcomingGames: GamesMock,
			upcomingHighlight: HighlightMock,
			upcomingMoreGames: GamesMock,
			freeGames: GamesMock,
			freeHighligth: HighlightMock
		}
	}
}

// Métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES
