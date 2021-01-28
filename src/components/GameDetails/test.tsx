import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
	developer: 'Different Tales',
	releaseDate: '2020-11-21T23:00:00',
	rating: 'BR0',
	publisher: '2K',
	platforms: ['windows', 'apple', 'linux'],
	genres: ['Role-playing', 'Narrative']
}

describe('<GameDetails />', () => {
	it('Should render the blocks', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(
			screen.getByRole('heading', { name: /developer/i })
		).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: /release date/i })
		).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: /platforms/i })
		).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: /publisher/i })
		).toBeInTheDocument()

		expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()

		expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
	})

	it('Should render the publisher', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(screen.getByText(/2k/i)).toBeInTheDocument()
	})

	it('Should render the developer', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(screen.getByText(/different tales/i)).toBeInTheDocument()
	})

	it('Should render the platform icons', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
		expect(screen.getByRole('img', { name: /apple/i })).toBeInTheDocument()
		expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
	})

	it('Should render the formated date', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
	})

	it('Should render free rating when BR0', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(screen.getByText(/free/i)).toBeInTheDocument()
	})

	it('Should render 16+ rating when BR16', () => {
		renderWithTheme(<GameDetails {...props} rating="BR16" />)

		expect(screen.getByText(/16\+/i)).toBeInTheDocument()
	})

	it('Should render 18+ rating when BR18', () => {
		renderWithTheme(<GameDetails {...props} rating="BR18" />)

		expect(screen.getByText(/18\+/i)).toBeInTheDocument()
	})

	it('Should render a list of genres', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
	})
})
