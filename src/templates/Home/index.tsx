import Base from 'templates/Base'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
	banners: BannerProps[]
	gamesSlider: GameCardProps[]
	mostPopularHighlight: HighlightProps
	mostPopularGames: GameCardProps[]
	upcomingGames: GameCardProps[]
	upcomingHighlight: HighlightProps
	freeGames: GameCardProps[]
	freeHighligth: HighlightProps
	newGamesTitle: string
	mostPopularGamesTitle: string
	upcomingGamesTitle: string
	freeGamesTitle: string
}

const Home = ({
	banners,
	gamesSlider,
	mostPopularHighlight,
	mostPopularGames,
	upcomingGames,
	upcomingHighlight,
	freeGames,
	freeHighligth,
	newGamesTitle,
	mostPopularGamesTitle,
	upcomingGamesTitle,
	freeGamesTitle
}: HomeTemplateProps) => (
	<Base>
		<Container>
			<S.SectionBanner>
				<BannerSlider items={banners} />
			</S.SectionBanner>
		</Container>

		<S.SectionNews>
			<Showcase title={newGamesTitle} games={gamesSlider} color="black" />
		</S.SectionNews>

		<Showcase
			title={mostPopularGamesTitle}
			highlight={mostPopularHighlight}
			games={mostPopularGames}
		/>

		<Showcase
			title={upcomingGamesTitle}
			games={upcomingGames}
			highlight={upcomingHighlight}
		/>

		<Showcase
			title={freeGamesTitle}
			highlight={freeHighligth}
			games={freeGames}
		/>
	</Base>
)

export default Home
