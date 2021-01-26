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
	upcomingMoreGames: GameCardProps[]
	freeGames: GameCardProps[]
	freeHighligth: HighlightProps
}

const Home = ({
	banners,
	gamesSlider,
	mostPopularHighlight,
	mostPopularGames,
	upcomingGames,
	upcomingHighlight,
	upcomingMoreGames,
	freeGames,
	freeHighligth
}: HomeTemplateProps) => (
	<Base>
		<Container>
			<S.SectionBanner>
				<BannerSlider items={banners} />
			</S.SectionBanner>
		</Container>

		<S.SectionNews>
			<Showcase title="News" games={gamesSlider} />
		</S.SectionNews>

		<Showcase
			title="Most Popular"
			highlight={mostPopularHighlight}
			games={mostPopularGames}
		/>

		<S.SectionUpcoming>
			<Showcase title="Upcoming" games={upcomingGames} />
			<Showcase highlight={upcomingHighlight} games={upcomingMoreGames} />
		</S.SectionUpcoming>

		<Showcase title="Free Games" highlight={freeHighligth} games={freeGames} />
	</Base>
)

export default Home
