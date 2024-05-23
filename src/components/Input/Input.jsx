export function Input(props) {
	const {
		type = 'text',
		value,
		onChange,
		onBlur,
		placeholder = 'Placeholder'
	} = props

	return (
		<>
			<input
				type={type}
				value={value || ''}
				onChange={onChange}
				placeholder={placeholder}
				onBlur={onBlur}
			/>
		</>
	)
}
