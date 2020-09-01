import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import 'jest-styled-components'
import Heading from '.'

describe('<Heading />', () => {
	it('Should be render a white heading by default', () => {
		renderWithTheme(<Heading>Won Games</Heading>)
		expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
			color: '#FAFAFA'
		})
	})

	it('Should be render a black heading when color is passed', () => {
		renderWithTheme(<Heading color="black">Won Games</Heading>)
		expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
			color: '#030517'
		})
	})

	it('Should be render a black heading with a line to the left side', () => {
		renderWithTheme(<Heading lineLeft>Won Games</Heading>)
		expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
			'border-left': '0.7rem solid #3CD3C1'
		})
	})

	it('Should be render a black heading with a line at the bottom', () => {
		renderWithTheme(<Heading lineBottom>Won Games</Heading>)
		expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
			'border-bottom',
			'0.7rem solid #F231A5',
			{
				modifier: '::after'
			}
		)
	})
})
