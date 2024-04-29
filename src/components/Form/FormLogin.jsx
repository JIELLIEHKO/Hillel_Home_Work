import { Input } from '../Input/Input.jsx'
import { Button } from '../Button/Button.jsx'

export function FormLogin({ classForm, type, placeholder }) {
	return (
		<>
			<form className={classForm}>
				<Input type={type} placeholder={placeholder} />

				<Button isActive={null} onClick={null}>
					Login
				</Button>
			</form>
		</>
	)
}
