import { render, screen } from '@testing-library/react'

import Home from '.'

describe('<Home />', () => {
	it('Should be render the heading', () => {
		const { container } = render(<Home />)

		expect(screen.getByRole('heading', { name: /Home/i })).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
