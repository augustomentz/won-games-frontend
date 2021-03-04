import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

import Cart, { CartProps } from '.'

const props: CartProps = {
	items: itemsMock,
	total: '$ 430,00',
	cards: cardsMock,
	recommendedTitle: 'You may like these games',
	recommendedGames: gamesMock,
	recommendedHighlight: highlightMock
}

jest.mock('templates/Base', () => {
	return {
		__esModule: true,
		default: function Mock({ children }: { children: React.ReactNode }) {
			return <div data-testid="Mock Base">{children}</div>
		}
	}
})

jest.mock('components/Showcase', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Mock Showcase"></div>
		}
	}
})

jest.mock('components/CartList', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Mock CartList"></div>
		}
	}
})

jest.mock('components/PaymentOptions', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Mock PaymentOptions"></div>
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

describe('<Cart />', () => {
	it('Should render sections', () => {
		renderWithTheme(<Cart {...props} />)

		expect(
			screen.getByRole('heading', { name: /my cart/i })
		).toBeInTheDocument()

		expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
		expect(screen.getByTestId('Mock CartList')).toBeInTheDocument()
		expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()
		expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
	})

	it('Should render empty section if there are no items', () => {
		renderWithTheme(<Cart {...props} items={[]} />)

		expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
	})
})
