import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

import * as S from './styles'

export type HomeTemplateProps = {
	banners: BannerProps[]
	gamesSlider: GameCardProps[]
	highlight: HighlightProps
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
	highlight,
	mostPopularGames,
	upcomingGames,
	upcomingHighlight,
	upcomingMoreGames,
	freeGames,
	freeHighligth
}: HomeTemplateProps) => (
	<section>
		<Container>
			<Menu />
			<S.SectionBanner>
				<BannerSlider items={banners} />
			</S.SectionBanner>
		</Container>

		<S.SectionNews>
			<Container>
				<Heading lineLeft lineColor="secondary" color="white">
					News
				</Heading>

				<GameCardSlider items={gamesSlider} color="black" />
			</Container>
		</S.SectionNews>

		<Container>
			<S.SectionMostPopular>
				<Heading lineLeft lineColor="secondary">
					Most Popular
				</Heading>

				<Highlight {...highlight} />
				<GameCardSlider items={mostPopularGames} color="black" />
			</S.SectionMostPopular>

			<S.SectionUpcoming>
				<Heading lineLeft lineColor="secondary">
					Upcoming
				</Heading>

				<GameCardSlider items={upcomingGames} />
				<Highlight {...upcomingHighlight} />
				<GameCardSlider items={upcomingMoreGames} />
			</S.SectionUpcoming>

			<S.SectionFreeGames>
				<Heading lineLeft lineColor="secondary">
					Free Games
				</Heading>

				<Highlight {...freeHighligth} />
				<GameCardSlider items={freeGames} />
			</S.SectionFreeGames>
		</Container>

		<S.SectionFooter>
			<Container>
				<Footer />
			</Container>
		</S.SectionFooter>
	</section>
)

export default Home
