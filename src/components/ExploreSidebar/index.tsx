import { useState } from 'react'
import { Close } from '@styled-icons/material-outlined/Close'
import { FilterList } from '@styled-icons/material-outlined/FilterList'

import * as S from './styles'

import Heading from 'components/Heading'
import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'
import Button from 'components/Button'

export type ItemProps = {
	title: string
	name: string
	type: 'checkbox' | 'radio' | string
	fields: Field[]
}

type Field = {
	label: string
	name: string
}

type Values = {
	[field: string]: boolean | string
}

export type ExploreSidebarProps = {
	items: ItemProps[]
	initialValues?: Values
	onFilter: (values: Values) => void
}

const ExploreSidebar = ({
	items,
	initialValues = {},
	onFilter
}: ExploreSidebarProps) => {
	const [values, setValues] = useState(initialValues)
	const [isOpen, setIsOpen] = useState(false)

	const handleChange = (name: string, value: string | boolean) => {
		setValues((oldValues) => ({ ...oldValues, [name]: value }))
	}

	const handleFilter = () => {
		setIsOpen(false)
		onFilter(values)
	}

	return (
		<S.Wrapper isOpen={isOpen}>
			<S.Overlay aria-hidden={isOpen}></S.Overlay>
			<S.IconWrapper>
				<FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
				<Close aria-label="close filters" onClick={() => setIsOpen(false)} />
			</S.IconWrapper>

			<S.Content>
				{items.map((item: ItemProps) => (
					<S.Items key={item.title}>
						<Heading lineBottom lineColor="secondary" size="small">
							{item.title}
						</Heading>

						{item.type === 'checkbox' &&
							item.fields.map((field: Field) => (
								<Checkbox
									key={field.name}
									name={field.name}
									label={field.label}
									labelFor={field.name}
									isChecked={!!values[field.name]}
									onCheck={(value) => handleChange(field.name, value)}
								/>
							))}

						{item.type === 'radio' &&
							item.fields.map((field: Field) => (
								<Radio
									key={field.name}
									id={field.name}
									name={item.name}
									label={field.label}
									labelFor={field.name}
									defaultChecked={field.name === values[item.name]}
									onChange={() => handleChange(item.name, field.name)}
								/>
							))}
					</S.Items>
				))}
			</S.Content>

			<S.Footer>
				<Button fullWidth size="medium" onClick={handleFilter}>
					Filter
				</Button>
			</S.Footer>
		</S.Wrapper>
	)
}

export default ExploreSidebar
