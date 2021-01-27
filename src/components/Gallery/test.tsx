import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'

import galleryMock from './mock'

describe('<Gallery />', () => {
	it('Should render thumbnails as buttons', () => {
		renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)

		expect(
			screen.getByRole('button', { name: /thumb-Gallery Image 1/i })
		).toHaveAttribute('src', galleryMock[0].src)

		expect(
			screen.getByRole('button', { name: /thumb-Gallery Image 2/i })
		).toHaveAttribute('src', galleryMock[1].src)
	})

	it('Should handle open modal', () => {
		renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)

		// Select modal
		const modal = screen.getByLabelText('modal')

		// Verify if the modal are not showed
		expect(modal.getAttribute('aria-hidden')).toBe('true')
		expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

		const thumb = screen.getByRole('button', { name: /thumb-Gallery Image 1/i })

		// Click on thumbnail and verify if the modal are opened
		fireEvent.click(thumb)
		expect(modal.getAttribute('aria-hidden')).toBe('false')
		expect(modal).toHaveStyle({ opacity: 1 })
	})

	it('Should open modal with selected image', async () => {
		renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)

		// Select modal
		const thumb = screen.getByRole('button', { name: /thumb-Gallery Image 2/i })

		// Click on thumbnail and verify if the modal are opened
		fireEvent.click(thumb)

		// Wait for the thumbnail image clicked are opened
		const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
		expect(img.parentElement?.parentElement).toHaveClass('slick-active')
	})

	it('Should handle close modal when overlay or button clicked', () => {
		renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)

		// Select modal
		const modal = screen.getByLabelText('modal')
		const thumb = screen.getByRole('button', { name: /thumb-Gallery Image 1/i })

		// Click on thumbnail to open modal
		fireEvent.click(thumb)

		const buttonCloseModal = screen.getByRole('button', {
			name: /close modal/i
		})

		// Click to close modal
		fireEvent.click(buttonCloseModal)
		expect(modal.getAttribute('aria-hidden')).toBe('true')
		expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })
	})

	it('Should handle close modal when ESC are pressioned', () => {
		const { container } = renderWithTheme(
			<Gallery items={galleryMock.slice(0, 2)} />
		)

		// Select modal
		const modal = screen.getByLabelText('modal')
		const thumb = screen.getByRole('button', { name: /thumb-Gallery Image 1/i })

		// Click on thumbnail to open modal
		fireEvent.click(thumb)

		// Click to close modal
		fireEvent.keyUp(container, { key: 'Escape' })
		expect(modal.getAttribute('aria-hidden')).toBe('true')
		expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })
	})
})
