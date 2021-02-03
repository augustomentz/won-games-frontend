import * as S from './styles'

import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Button from 'components/Button'

export type FormProfileProps = {
	someType: string
}

const FormProfile = () => (
	<>
		<Heading color="black" lineBottom size="small">
			My profile
		</Heading>

		<S.Form>
			<TextField
				name="name"
				placeholder="Name"
				label="Name"
				initialValue="Jhon Cage"
			/>

			<TextField
				name="email"
				type="email"
				placeholder="E-mail"
				label="E-mail"
				initialValue="jhoncage@gmail.com"
				disabled
			/>

			<TextField
				name="password"
				type="password"
				placeholder="Type your password"
				label="Password"
			/>

			<TextField
				name="password"
				type="password"
				placeholder="New password"
				label="New password"
			/>

			<Button size="large">Save</Button>
		</S.Form>
	</>
)

export default FormProfile
