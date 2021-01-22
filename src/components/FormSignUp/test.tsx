import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
	it('Should render the form', () => {
		renderWithTheme(<FormSignUp />)

		expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
		expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
		expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
		expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument()

		expect(
			screen.getByRole('button', { name: /sign up now/i })
		).toBeInTheDocument()
	})

	it('Should render the text and link to sign in', () => {
		renderWithTheme(<FormSignUp />)

		expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
		expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument()
	})
})
