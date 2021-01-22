import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
	it('Should render the form', () => {
		renderWithTheme(<FormSignIn />)

		expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()

		expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()

		expect(
			screen.getByRole('button', { name: /sign in now/i })
		).toBeInTheDocument()
	})

	it('Should render the forgot password link', () => {
		renderWithTheme(<FormSignIn />)

		expect(
			screen.getByRole('link', { name: /forgot your password\?/i })
		).toBeInTheDocument()
	})

	it('Should render the text and link to sign up', () => {
		renderWithTheme(<FormSignIn />)

		expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
		expect(screen.getByText(/don`t have an account\?/i)).toBeInTheDocument()
	})
})
