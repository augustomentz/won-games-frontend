import * as S from './styles'

import Button from 'components/Button'

export type HighlightProps = {
	title: string
	subtitle: string
	bgImage: string
	floatImage?: string
	buttonLabel: string
	buttonLink: string
	alignment?: 'right' | 'left'
}

const Highlight = ({
	title,
	subtitle,
	bgImage,
	floatImage,
	buttonLabel,
	buttonLink,
	alignment = 'right'
}: HighlightProps) => (
	<S.Wrapper bgImage={bgImage} alignment={alignment}>
		{!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
		<S.Content>
			<S.Title>{title}</S.Title>
			<S.Subtitle>{subtitle}</S.Subtitle>
			<Button as="a" href={buttonLink}>
				{buttonLabel}
			</Button>
		</S.Content>
	</S.Wrapper>
)

export default Highlight
