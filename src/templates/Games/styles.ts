import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'

export const Main = styled(Container)`
	${({ theme }) => css`
		display: grid;
		gap: ${theme.grid.gutter};

		${media.greaterThan('medium')`
			grid-template-columns: 26rem 1fr;
		`}
	`}
`

export const Section = styled.section``

export const ShowMore = styled.button`
	${({ theme }) => css`
		background: none;
		border: none;
		width: 100%;
		color: ${theme.colors.white};
		text-align: center;
		padding: ${theme.spacings.medium};
		text-transform: uppercase;
		font-weight: bold;
		cursor: pointer;
		outline: none;

		> svg {
			color: ${theme.colors.primary};
		}
	`}
`
