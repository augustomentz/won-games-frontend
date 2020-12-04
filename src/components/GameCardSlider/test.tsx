import 'match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCardSlider from '.'

const items = [
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x140',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00'
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x141',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00'
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x142',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00'
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x142',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00'
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x142',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00'
	}
]

describe('<GameCardSlider />', () => {
	it('Should render with 4 actives items', () => {
		const { container } = renderWithTheme(<GameCardSlider items={items} />)

		expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
	})

	it('Should render white arrows if color passed', () => {
		renderWithTheme(<GameCardSlider items={items} color="white" />)

		expect(screen.getByLabelText(/prev games/i)).toHaveStyle({
			color: '#FAFAFA'
		})
		expect(screen.getByLabelText(/next games/i)).toHaveStyle({
			color: '#FAFAFA'
		})
	})
})
