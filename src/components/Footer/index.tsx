import Link from 'next/link'

import Logo from 'components/Logo'
import Heading from 'components/Heading'

import * as S from './styles'

const Footer = () => (
	<S.Wrapper>
		<Logo color="black" />
		<S.Content>
			<S.Column>
				<Heading color="black" size="small" lineColor="secondary" lineBottom>
					Contact
				</Heading>

				<a href="mailto:sac@wongames.com">sac@wongames.com</a>
			</S.Column>

			<S.Column>
				<Heading color="black" size="small" lineColor="secondary" lineBottom>
					Follow us
				</Heading>

				<nav aria-labelledby="social media">
					<a
						href="https://www.instagram.com/won-games"
						target="_blank"
						rel="noonpenner, noreferrer"
					>
						Instagram
					</a>

					<a
						href="https://www.twitter.com/won-games"
						target="_blank"
						rel="noonpenner, noreferrer"
					>
						Twitter
					</a>

					<a
						href="https://www.youtube.com/won-games"
						target="_blank"
						rel="noonpenner, noreferrer"
					>
						Youtube
					</a>

					<a
						href="https://www.facebook.com/won-games"
						target="_blank"
						rel="noonpenner, noreferrer"
					>
						Facebook
					</a>
				</nav>
			</S.Column>

			<S.Column>
				<Heading color="black" size="small" lineColor="secondary" lineBottom>
					Links
				</Heading>

				<nav aria-labelledby="footer resources">
					<Link href="/">
						<a>Home</a>
					</Link>

					<Link href="/games">
						<a>Store</a>
					</Link>

					<Link href="/search">
						<a>Search</a>
					</Link>
				</nav>
			</S.Column>

			<S.Column>
				<Heading color="black" size="small" lineColor="secondary" lineBottom>
					Location
				</Heading>

				<span>Lorem ipsum dolor sit.</span>
				<span>Lorem ipsum</span>
				<span>Lorem, ipsum dolor.</span>
			</S.Column>
		</S.Content>
		<S.Copyright>Won Games 2020 © All rights reserved.</S.Copyright>
	</S.Wrapper>
)

export default Footer
