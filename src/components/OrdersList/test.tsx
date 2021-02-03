import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ordersMock from './mock'

import OrdersList from '.'

jest.mock('components/GameItem', () => {
	return {
		__esModule: true,
		default: function Mock({ children }: { children: React.ReactNode }) {
			return <div data-testid="Mock GameItem">{children}</div>
		}
	}
})

jest.mock('components/Empty', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Mock Empty"></div>
		}
	}
})

describe('<OrdersList />', () => {
	it('Should render the game items', () => {
		renderWithTheme(<OrdersList items={ordersMock} />)

		expect(
			screen.getByRole('heading', { name: /my orders/i })
		).toBeInTheDocument()

		expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)
		expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
	})

	it('Should render empty state', () => {
		renderWithTheme(<OrdersList items={[]} />)

		expect(screen.queryAllByTestId('Mock GameItem')).toHaveLength(0)
		expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
	})
})
