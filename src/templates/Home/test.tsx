import 'match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BannersMock from 'components/BannerSlider/mock'
import GamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
	banners: BannersMock,
	gamesSlider: [GamesMock[0]],
	highlight: HighlightMock,
	mostPopularGames: [GamesMock[0]],
	upcomingGames: [GamesMock[0]],
	upcomingHighlight: HighlightMock,
	upcomingMoreGames: [GamesMock[0]],
	freeGames: [GamesMock[0]],
	freeHighligth: HighlightMock
}

describe('<Home />', () => {
	it('Should render menu and footer', () => {
		renderWithTheme(<Home {...props} />)

		expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /contact us/i })
		).toBeInTheDocument()
		expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

		expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /most popular/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /upcoming/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /free games/i })
		).toBeInTheDocument()
		expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
		expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
		expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3)
		expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3)
	})
})
