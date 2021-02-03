import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

jest.mock('next/router', () => ({
	useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}))

jest.mock('templates/Base', () => {
	return {
		__esModule: true,
		default: function Mock({ children }: { children: React.ReactNode }) {
			return <div data-testid="Mock Base">{children}</div>
		}
	}
})

jest.mock('components/Heading', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Mock Heading"></div>
		}
	}
})

jest.mock('components/ProfileMenu', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Mock ProfileMenu"></div>
		}
	}
})

describe('<Profile />', () => {
	it('Should render sections', () => {
		renderWithTheme(<Profile>Lorem Ipsum</Profile>)

		expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument()
		expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument()
		expect(screen.getByTestId('Mock Heading')).toBeInTheDocument()
		expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
	})
})
