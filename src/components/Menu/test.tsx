import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
	it('Should render the menu', () => {
		renderWithTheme(<Menu />)

		expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
		expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
		expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
	})

	it('Should render the open/close menu', () => {
		renderWithTheme(<Menu />)

		// Select MenuFull
		const fullMenuElement = screen.getByRole('navigation', { hidden: true })

		// Verify if the menu are not showed
		expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
		expect(fullMenuElement).toHaveStyle({ opacity: 0 })

		// Click on menu icon and verify if the menu are opened
		fireEvent.click(screen.getByLabelText(/open menu/i))
		expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
		expect(fullMenuElement).toHaveStyle({ opacity: 1 })

		// Click on menu icon and verify if the menu are closed
		fireEvent.click(screen.getByLabelText(/close menu/i))
		expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
		expect(fullMenuElement).toHaveStyle({ opacity: 0 })
	})
})
