import { Input } from '../Input/Input.jsx'
import { Button } from '../Button/Button.jsx'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext.jsx'

export function FormLogin({ classForm, type, placeholder }) {
	const navigate = useNavigate()
	const [userName, setUserName] = useState('')

	const data = useContext(UserContext)

	const handleChange = event => {
		setUserName(event.target.value)
	}

	const handleClick = () => {
		data.setUser(userName)
		navigate('/menu')
	}

	return (
		<>
			<form className={classForm}>
				<Input type={type} placeholder={placeholder} onChange={handleChange} />

				<Button isActive={null} onClick={handleClick}>
					Login
				</Button>
			</form>
		</>
	)
}
