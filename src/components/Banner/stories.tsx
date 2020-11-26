import { Meta, Story } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
	title: 'Banner',
	component: Banner,
	args: {
		img: 'https://source.unsplash.com/user/willianjusten/1042x500',
		title: 'Defy death',
		subtitle: '<p>Play the new <strong>CrashLands</strong> season',
		buttonText: 'Buy now',
		buttonLink: '/games/defy-death'
	},
	parameters: {
		layout: 'fullscreen'
	}
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />
