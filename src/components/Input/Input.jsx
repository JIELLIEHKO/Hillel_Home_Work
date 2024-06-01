import React, { forwardRef } from 'react'

export const Input = forwardRef(
	({ type, value, onChange, onBlur, placeholder }, ref) => {
		return (
			<>
				<input
					ref={ref}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					onBlur={onBlur}
				/>
			</>
		)
	}
)
