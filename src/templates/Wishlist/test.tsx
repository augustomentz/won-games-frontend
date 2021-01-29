import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Wishlist from '.'

describe('<Wishlist />', () => {
	it('Should be render the heading', () => {
		const { container } = renderWithTheme(<Wishlist />)

		expect(
			screen.getByRole('heading', { name: /Wishlist/i })
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
