import Button from 'components/Button'

import * as S from './styles'

export type BannerProps = {
	img: string
	title: string
	subtitle: string
	buttonText: string
	buttonLink: string
}

const Banner = ({
	img,
	title,
	subtitle,
	buttonText,
	buttonLink
}: BannerProps) => (
	<S.Wrapper>
		<S.Image src={img} role="image" aria-label={title}></S.Image>

		<S.Caption>
			<S.Title>{title}</S.Title>
			<S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
			<Button as="a" href={buttonLink} size="large">
				{buttonText}
			</Button>
		</S.Caption>
	</S.Wrapper>
)

export default Banner
