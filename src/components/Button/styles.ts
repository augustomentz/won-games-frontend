import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = { hasIcon: boolean } & Omit<ButtonProps, 'children'>

const wrapperModifiers = {
	small: (theme: DefaultTheme) => css`
		height: 3rem;
		font-size: ${theme.font.sizes.xsmall};
	`,
	medium: (theme: DefaultTheme) => css`
		height: 4rem;
		font-size: ${theme.font.sizes.small};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
	`,
	large: (theme: DefaultTheme) => css`
		height: 5rem;
		font-size: ${theme.font.sizes.medium};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
	`,
	fullWidth: () => css`
		width: 100%;
	`,
	hasIcon: (theme: DefaultTheme) => css`
		display: inline-flex;
		align-items: center;
		justify-content: center;

		svg {
			width: 1.5rem;

			& + span {
				margin-left: ${theme.spacings.xxsmall};
			}
		}
	`
}

export const Wrapper = styled.button<WrapperProps>`
	${({ theme, size, fullWidth, hasIcon }) => css`
		background: linear-gradient(
			178.59deg,
			#ff5f5f -14.51%,
			#f062c0 102.86%,
			#f23131 102.86%
		);
		color: ${theme.colors.white};
		border: 0;
		border-radius: ${theme.border.radius};
		padding: ${theme.spacings.xxsmall};
		outline: none;
		cursor: pointer;

		${!!size && wrapperModifiers[size](theme)};
		${!!fullWidth && wrapperModifiers.fullWidth()};
		${!!hasIcon && wrapperModifiers.hasIcon(theme)};
	`}
`
