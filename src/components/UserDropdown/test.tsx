import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
	it('Should render the username', () => {
		renderWithTheme(<UserDropdown username="Augusto" />)

		expect(screen.getByText('Augusto')).toBeInTheDocument()
	})

	it('Should render the menu', () => {
		renderWithTheme(<UserDropdown username="Augusto" />)

		userEvent.click(screen.getByText(/augusto/i))

		expect(
			screen.getByRole('link', { name: /my profile/i })
		).toBeInTheDocument()
		expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
		expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
	})
})
