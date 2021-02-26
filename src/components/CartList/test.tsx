import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
	it('Should render the cart list', () => {
		const { container } = renderWithTheme(
			<CartList items={mockItems} total="R$ 330,00" />
		)

		expect(screen.getAllByRole('heading')).toHaveLength(2)
		expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#F231A5' })

		expect(container.firstChild).toMatchSnapshot()
	})

	it('Should render the button', () => {
		renderWithTheme(<CartList items={mockItems} total="R$ 330,00" hasButton />)

		expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
	})

	it('Should render empty if there are not games', () => {
		renderWithTheme(<CartList />)

		expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
		expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
	})
})
