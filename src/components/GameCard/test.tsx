import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'
import GameCard from '.'

const GameCardProps = {
	slug: 'population-zero',
	title: 'Population Zero',
	developer: 'Rockstar Games',
	img: 'https://source.unsplash.com/user/willianjusten/300x140',
	price: 235
}

describe('<GameCard />', () => {
	it('Should be render correctly', () => {
		const { container } = renderWithTheme(<GameCard {...GameCardProps} />)

		expect(
			screen.getByRole('heading', { name: GameCardProps.title })
		).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: GameCardProps.developer })
		).toBeInTheDocument()

		expect(
			screen.getByRole('img', { name: GameCardProps.title })
		).toHaveAttribute('src', GameCardProps.img)

		expect(
			screen.getByRole('link', { name: GameCardProps.title })
		).toHaveAttribute('href', `/game/${GameCardProps.slug}`)

		expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})

	it('Should render price in label default', () => {
		renderWithTheme(<GameCard {...GameCardProps} />)

		const price = screen.getByText('$235.00')

		expect(price).not.toHaveStyle({
			textDecoration: 'line-through'
		})
		expect(price).toHaveStyle({
			backgroundColor: theme.colors.secondary
		})
	})

	it('Should render a line-through in price when promotional', () => {
		renderWithTheme(<GameCard {...GameCardProps} promotionalPrice={15} />)

		expect(screen.getByText('$235.00')).toHaveStyle({
			textDecoration: 'line-through'
		})
		expect(screen.getByText('$15.00')).not.toHaveStyle({
			textDecoration: 'line-through'
		})
	})

	it('Should render a filled Favorite icon when favorite is true', () => {
		renderWithTheme(<GameCard {...GameCardProps} favorite />)

		expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
	})

	it('Should call onFav method when favorite is clicked', () => {
		const onFav = jest.fn()

		renderWithTheme(<GameCard {...GameCardProps} favorite onFav={onFav} />)

		fireEvent.click(screen.getAllByRole('button')[0])

		expect(onFav).toBeCalled()
	})

	it('Should render a GameCard with a Ribbon', () => {
		renderWithTheme(
			<GameCard
				{...GameCardProps}
				ribbon="My Ribbon"
				ribbonColor="secondary"
				ribbonSize="small"
			/>
		)

		const ribbon = screen.getByText(/my ribbon/i)

		expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
		expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
		expect(ribbon).toBeInTheDocument()
	})
})
