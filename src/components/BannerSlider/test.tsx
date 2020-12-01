import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import BannerSlider from '.'

const items = [
	{
		img: 'https://source.unsplash.com/user/willianjusten/1042x580',
		title: 'Defy death 1',
		subtitle: '<p>Play the new <strong>CrashLands</strong> season',
		buttonText: 'Buy now',
		buttonLink: '/games/defy-death',
		ribbon: 'Bestselling'
	},
	{
		img: 'https://source.unsplash.com/user/willianjusten/1042x582',
		title: 'Defy death 2',
		subtitle: '<p>Play the new <strong>CrashLands</strong> season',
		buttonText: 'Buy now',
		buttonLink: '/games/defy-death'
	}
]

describe('<BannerSlider />', () => {
	it('Should render vertical Slider', () => {
		const { container } = renderWithTheme(<BannerSlider items={items} />)

		expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
	})

	it('Should render Slider with 1 active item', () => {
		const { container } = renderWithTheme(<BannerSlider items={items} />)

		expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
		expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

		expect(
			screen.getByRole('heading', { name: /defy death 1/i, hidden: false })
		).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: /defy death 2/i, hidden: true })
		).toBeInTheDocument()
	})

	it('Should render the dots slider', () => {
		const { container } = renderWithTheme(<BannerSlider items={items} />)

		expect(container.querySelector('.slick-dots')).toBeInTheDocument()
	})
})
