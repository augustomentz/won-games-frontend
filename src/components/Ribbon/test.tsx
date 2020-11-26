import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
	it('Should render the text correctly', () => {
		renderWithTheme(<Ribbon>Bestseller</Ribbon>)

		expect(screen.getByText(/Bestseller/i)).toBeInTheDocument()
	})

	it('Should render with the primary color', () => {
		renderWithTheme(<Ribbon>Bestseller</Ribbon>)

		expect(screen.getByText(/Bestseller/i)).toHaveStyle({
			backgroundColor: '#F231A5'
		})
	})

	it('Should render with the secondary color', () => {
		renderWithTheme(<Ribbon color="secondary">Bestseller</Ribbon>)

		expect(screen.getByText(/Bestseller/i)).toHaveStyle({
			backgroundColor: '#3CD3C1'
		})
	})

	it('Should render the normal font size as default', () => {
		renderWithTheme(<Ribbon>Bestseller</Ribbon>)

		expect(screen.getByText(/Bestseller/i)).toHaveStyle({
			height: '3.6rem',
			fontSize: '1.4rem'
		})
	})

	it('Should render the small font size', () => {
		renderWithTheme(<Ribbon size="small">Bestseller</Ribbon>)

		expect(screen.getByText(/Bestseller/i)).toHaveStyle({
			height: '2.6rem',
			fontSize: '1.2rem'
		})
	})
})
