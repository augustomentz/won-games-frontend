import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
	it('Should render the small size', () => {
		const { container } = renderWithTheme(<Button size="small">Buy now</Button>)

		expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
			height: '3rem',
			'font-size': '1.2rem'
		})

		expect(container.firstChild).toMatchSnapshot()
	})

	it('Should be render the medium size by default', () => {
		renderWithTheme(<Button>Buy now</Button>)

		expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
			height: '4rem',
			padding: '0.8rem 3.2rem',
			'font-size': '1.4rem'
		})
	})

	it('Should be render the large size', () => {
		renderWithTheme(<Button size="large">Buy now</Button>)

		expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
			height: '5rem',
			padding: '0.8rem 4.8rem',
			'font-size': '1.6rem'
		})
	})

	it('Should render a fullWidth version', () => {
		renderWithTheme(<Button fullWidth>Buy now</Button>)

		expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
			width: '100%'
		})
	})

	it('Should render a icon version', () => {
		renderWithTheme(
			<Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
		)

		expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
		expect(screen.getByTestId('icon')).toBeInTheDocument()
	})

	it('Should render Button as a link', () => {
		renderWithTheme(
			<Button as="a" href="/link">
				Buy now
			</Button>
		)

		expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
			'href',
			'/link'
		)
	})
})
