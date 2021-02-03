import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import PaymentOptions from '.'
import cards from './mock'

describe('<PaymentOptions />', () => {
	it('Should render the heading', () => {
		renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

		expect(screen.getByLabelText(/4325/)).toBeInTheDocument()
		expect(screen.getByLabelText(/4326/)).toBeInTheDocument()
		expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
	})

	it('Should render select card when clicking on the label', async () => {
		renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

		userEvent.click(screen.getByLabelText(/4325/))
		await waitFor(() => {
			expect(screen.getByRole('radio', { name: /4325/ })).toBeChecked()
		})
	})

	it('Should not call handlePayment when button is disabled', () => {
		const handlePayment = jest.fn()

		renderWithTheme(
			<PaymentOptions cards={cards} handlePayment={handlePayment} />
		)

		userEvent.click(screen.getByRole('button', { name: /buy now/i }))
		expect(handlePayment).not.toHaveBeenCalled()
	})

	it('Should call handlePayment when credit card is selected', async () => {
		const handlePayment = jest.fn()

		renderWithTheme(
			<PaymentOptions cards={cards} handlePayment={handlePayment} />
		)

		userEvent.click(screen.getByLabelText(/4325/))
		userEvent.click(screen.getByRole('button', { name: /buy now/i }))

		await waitFor(() => {
			expect(handlePayment).toHaveBeenCalled()
		})
	})
})
