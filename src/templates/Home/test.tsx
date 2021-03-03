import 'match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BannersMock from 'components/BannerSlider/mock'
import GamesMock from 'components/GameCardSlider/mock'
import HighlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
	banners: BannersMock,
	newGamesTitle: 'New Games',
	gamesSlider: [GamesMock[0]],
	mostPopularGamesTitle: 'Most Popular Games',
	mostPopularHighlight: HighlightMock,
	mostPopularGames: [GamesMock[0]],
	upcomingGamesTitle: 'Upcoming',
	upcomingGames: [GamesMock[0]],
	upcomingHighlight: HighlightMock,
	freeGamesTitle: 'Free Games',
	freeGames: [GamesMock[0]],
	freeHighligth: HighlightMock
}

jest.mock('components/Showcase', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Mock Showcase"></div>
		}
	}
})

jest.mock('components/BannerSlider', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Mock BannerSlider"></div>
		}
	}
})

describe('<Home />', () => {
	it('Should render Banner and Showcases', () => {
		renderWithTheme(<Home {...props} />)

		expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
		expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4)
	})
})
