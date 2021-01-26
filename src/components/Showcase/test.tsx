import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

import Showcase from '.'

const props = {
	title: 'Most Popular',
	highlight: highlightMock,
	games: gamesMock.slice(0, 1)
}

describe('<Showcase />', () => {
	it('Should be render the heading', () => {
		renderWithTheme(<Showcase {...props} />)

		expect(
			screen.getByRole('heading', { name: /most popular/i })
		).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: highlightMock.title })
		).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: gamesMock[0].title })
		).toBeInTheDocument()
	})

	it('Should be render without title', () => {
		renderWithTheme(
			<Showcase games={props.games} highlight={props.highlight} />
		)

		screen.getByRole('heading', { name: highlightMock.title })
		screen.getByRole('heading', { name: gamesMock[0].title })

		expect(
			screen.queryByRole('heading', { name: /most popular/i })
		).not.toBeInTheDocument()
	})

	it('Should be render without highlight', () => {
		renderWithTheme(<Showcase games={props.games} title={props.title} />)

		screen.getByRole('heading', { name: /most popular/i })
		screen.getByRole('heading', { name: gamesMock[0].title })

		expect(
			screen.queryByRole('heading', { name: highlightMock.title })
		).not.toBeInTheDocument()
	})

	it('Should be render without games', () => {
		renderWithTheme(
			<Showcase title={props.title} highlight={props.highlight} />
		)

		screen.getByRole('heading', { name: /most popular/i })
		screen.getByRole('heading', { name: highlightMock.title })

		expect(
			screen.queryByRole('heading', { name: gamesMock[0].title })
		).not.toBeInTheDocument()
	})
})
