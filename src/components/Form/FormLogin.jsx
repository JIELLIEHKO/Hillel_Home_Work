import { Input } from '../Input/Input.jsx'
import { Button } from '../Button/Button.jsx'
import { useNavigate } from 'react-router-dom'

export function FormLogin({ classForm, type, placeholder }) {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate('/menu')
	}

	return (
		<>
			<form className={classForm}>
				<Input type={type} placeholder={placeholder} />

				<Button isActive={null} onClick={handleClick}>
					Login
				</Button>
			</form>
		</>
	)
}
