import Base from 'templates/Base'

import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'

export type WishlistProps = {
	games?: GameCardProps[]
	recommendedGames: GameCardProps[]
	recommendedHighlight: HighlightProps
}

const Wishlist = ({
	games,
	recommendedGames,
	recommendedHighlight
}: WishlistProps) => (
	<Base>
		<Container>
			<Heading lineLeft lineColor="secondary">
				Wishlist
			</Heading>

			<Grid>
				{games?.map((game, index) => (
					<GameCard key={`wishlist-${index}`} {...game} />
				))}
			</Grid>

			<Divider />
		</Container>

		<Showcase
			title="You may like these games"
			games={recommendedGames}
			highlight={recommendedHighlight}
		/>
	</Base>
)

export default Wishlist
