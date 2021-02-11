import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import Dropdown from '.'

describe('<Dropdown />', () => {
	beforeEach(() => {
		const title = <h1 aria-label="toggle dropdown">Click here</h1>

		renderWithTheme(
			<Dropdown title={title}>
				<span>Content</span>
			</Dropdown>
		)
	})

	it('Should render title', () => {
		expect(screen.getByLabelText(/toggle dropdown/)).toBeInTheDocument()
	})

	it('Should handle open/close dropdown', () => {
		const content = screen.getByText(/content/i).parentElement

		expect(content).toHaveStyle({ opacity: 0 })
		expect(content?.getAttribute('aria-hidden')).toBe('true')

		userEvent.click(screen.getByLabelText(/toggle dropdown/))

		expect(content).toHaveStyle({ opacity: 1 })
		expect(content?.getAttribute('aria-hidden')).toBe('false')
	})
})
