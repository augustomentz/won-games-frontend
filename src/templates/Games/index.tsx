import Base from 'templates/Base'

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'

import * as S from './styles'

export type GamesTemplateProps = {
	games?: GameCardProps[]
	filterItems: ItemProps[]
}

const Games = ({ filterItems = [], games = [] }: GamesTemplateProps) => {
	const handleFilter = () => {
		return
	}

	const handleShowMore = () => {
		return
	}

	return (
		<Base>
			<S.Main>
				<ExploreSidebar items={filterItems} onFilter={handleFilter} />

				<S.Section>
					<Grid>
						{games.map((game: GameCardProps) => (
							<GameCard key={game.title} {...game} />
						))}
					</Grid>

					<S.ShowMore role="button" onClick={handleShowMore}>
						<p>Show More</p>
						<ArrowDown size={35} />
					</S.ShowMore>
				</S.Section>
			</S.Main>
		</Base>
	)
}

export default Games
