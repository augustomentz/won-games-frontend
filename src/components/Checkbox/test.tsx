import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import Checkbox from '.'

import theme from 'styles/theme'

describe('<Checkbox />', () => {
	it('Should render with a label', () => {
		renderWithTheme(<Checkbox label="Checkbox label" labelFor="check" />)

		expect(screen.getByRole('checkbox')).toBeInTheDocument()
		expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
		expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
	})

	it('Should render without a label', () => {
		renderWithTheme(<Checkbox />)

		expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
	})

	it('Should render with black label', () => {
		renderWithTheme(
			<Checkbox label="Checkbox label" labelFor="check" labelColor="black" />
		)

		expect(screen.getByText(/checkbox label/i)).toHaveStyle({
			color: theme.colors.black
		})
	})

	it('Should dispatch onCheck when status changes', async () => {
		const onCheck = jest.fn()

		renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />)
		expect(onCheck).not.toHaveBeenCalled()

		userEvent.click(screen.getByRole('checkbox'))
		await waitFor(() => {
			expect(onCheck).toHaveBeenCalledTimes(1)
		})

		expect(onCheck).toHaveBeenCalledWith(true)
	})

	it('Should dispatch onCheck when status changes', async () => {
		const onCheck = jest.fn()

		renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />)
		expect(onCheck).not.toHaveBeenCalled()

		userEvent.click(screen.getByRole('checkbox'))
		await waitFor(() => {
			expect(onCheck).toHaveBeenCalledTimes(1)
		})

		expect(onCheck).toHaveBeenCalledWith(false)
	})

	it('Should be accessible with tab', async () => {
		renderWithTheme(<Checkbox label="Checkbox" labelFor="Checkbox" />)

		expect(document.body).toHaveFocus()
		userEvent.tab()
		expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
	})
})
