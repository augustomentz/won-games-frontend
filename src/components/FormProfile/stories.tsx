import { Meta, Story } from '@storybook/react/types-6-0'
import FormProfile from '.'

export default {
	title: 'Form/FormProfile',
	component: FormProfile
} as Meta

export const Default: Story = (args) => (
	<div style={{ maxWidth: 800, margin: 'auto' }}>
		<FormProfile {...args} />
	</div>
)
