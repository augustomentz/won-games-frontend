import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'
import * as S from './styles'

const props = {
	title: 'Heading 1',
	subtitle: 'Heading 2',
	bgImage: '/img/red-dead-bg.png',
	buttonLabel: 'Buy now',
	buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
	it('Should render the heading and button', () => {
		const { container } = renderWithTheme(<Highlight {...props} />)

		expect(
			screen.getByRole('heading', { name: /heading 1/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /heading 2/i })
		).toBeInTheDocument()
		expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
		expect(container.firstChild).toMatchSnapshot()
	})

	it('Should render background image', () => {
		const { container } = renderWithTheme(<Highlight {...props} />)

		expect(container.firstChild).toHaveStyle({
			backgroundImage: `url(${props.bgImage})`
		})
	})

	it('Should render float image', () => {
		renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />)

		expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
			'src',
			'/float-image.png'
		)
	})

	it('Should render align right by default', () => {
		const { container } = renderWithTheme(<Highlight {...props} />)

		expect(container.firstChild).toHaveStyleRule(
			'grid-template-areas',
			"'floatimage content'"
		)

		expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
			modifier: `${S.Content}`
		})
	})

	it('Should render align left', () => {
		const { container } = renderWithTheme(
			<Highlight {...props} alignment="left" />
		)

		expect(container.firstChild).toHaveStyleRule(
			'grid-template-areas',
			"'content floatimage'"
		)

		expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
			modifier: `${S.Content}`
		})
	})
})
