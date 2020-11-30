import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
	img: 'https://source.unsplash.com/user/willianjusten/1042x500',
	title: 'Defy death',
	subtitle: '<p>Play the new <strong>CrashLands</strong> season',
	buttonText: 'Buy now',
	buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
	it('Should render correctly', () => {
		const { container } = renderWithTheme(<Banner {...props} />)

		expect(
			screen.getByRole('heading', { name: /Defy death/i })
		).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: /Play the new CrashLands season/i })
		).toBeInTheDocument()

		expect(
			screen.getByRole('image', { name: /Defy death/i })
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})

	it('Should render a Ribbon', () => {
		renderWithTheme(
			<Banner
				{...props}
				ribbon="My Ribbon"
				ribbonSize="small"
				ribbonColor="secondary"
			/>
		)

		const ribbon = screen.getByText(/My Ribbon/i)
		expect(ribbon).toBeInTheDocument()
		expect(ribbon).toHaveStyle({
			backgroundColor: '#3CD3D1',
			height: '2.6rem',
			fontSize: '1.2rem'
		})
	})
})
