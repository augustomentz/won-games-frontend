import Link from 'next/link'

import Button from 'components/Button'
import Ribbon, { RibbonSizes, RibbonColors } from 'components/Ribbon'

import * as S from './styles'

export type BannerProps = {
	img: string
	title: string
	subtitle: string
	buttonText: string
	buttonLink: string
	ribbon?: string
	ribbonSize?: RibbonSizes
	ribbonColor?: RibbonColors
}

const Banner = ({
	img,
	title,
	subtitle,
	buttonText,
	buttonLink,
	ribbon,
	ribbonSize = 'normal',
	ribbonColor = 'primary'
}: BannerProps) => (
	<S.Wrapper>
		{!!ribbon && (
			<Ribbon size={ribbonSize} color={ribbonColor}>
				{ribbon}
			</Ribbon>
		)}

		<S.Image src={img} role="image" aria-label={title}></S.Image>

		<S.Caption>
			<S.Title>{title}</S.Title>
			<S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
			<Link href={buttonLink} passHref>
				<Button as="a" size="large">
					{buttonText}
				</Button>
			</Link>
		</S.Caption>
	</S.Wrapper>
)

export default Banner
