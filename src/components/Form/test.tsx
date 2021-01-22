import { renderWithTheme } from 'utils/tests/helpers'

import { FormWrapper, FormLink } from '.'

describe('<Form />', () => {
	it('Should be render the heading', () => {
		const { container } = renderWithTheme(
			<FormWrapper>
				<FormLink>
					My nice <a href="#">Link</a>
				</FormLink>
			</FormWrapper>
		)

		expect(container.parentElement).toMatchSnapshot()
	})
})
