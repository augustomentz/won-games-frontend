import Base from 'templates/Base'

import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Empty from 'components/Empty'

export type WishlistProps = {
	games?: GameCardProps[]
	recommendedGames: GameCardProps[]
	recommendedHighlight: HighlightProps
}

const Wishlist = ({
	games = [],
	recommendedGames,
	recommendedHighlight
}: WishlistProps) => (
	<Base>
		<Container>
			<Heading lineLeft lineColor="secondary">
				Wishlist
			</Heading>

			{games.length >= 1 ? (
				<Grid>
					{games?.map((game, index) => (
						<GameCard key={`wishlist-${index}`} {...game} />
					))}
				</Grid>
			) : (
				<Empty
					title="Your wishlist is empty"
					description="Games added to your wishlist will appear here"
					hasLink
				/>
			)}

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
