import theme from 'styles/theme'

// Inferência de tipos
type Theme = typeof theme

declare module 'styled-components' {
	/* eslint-disable @typescript-eslint/no-empty-interface */
	export interface DefaultTheme extends Theme {}
}
