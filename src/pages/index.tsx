import Home, { HomeTemplateProps } from 'templates/Home'

import BannersMock from 'components/BannerSlider/mock'
import GamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
	return <Home {...props} />
}

// getStaticProps => Gerar estático em build time
// getServerSideProps => Gerar via SSR a cada request (nunca vai para o bundle do client)
// getInitialProps => Gerar via SSR a cada request (vai para o bundle do client, faza hydrate do lado do client depois do 1 req)
export async function getServerSideProps() {
	return {
		props: {
			banners: BannersMock,
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
