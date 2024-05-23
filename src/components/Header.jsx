import { Form } from './Form/Form.jsx'
import { NavLink } from 'react-router-dom'

export function Header() {
	return (
		<>
			<header className='header'>
				<a className='logo' href='/login'>
					Pizza Day
				</a>

				<nav className='nav'>
					<NavLink to='/' style={{ marginRight: '1rem' }}>
						Login
					</NavLink>
					<NavLink to='/menu' style={{ marginRight: '1rem' }}>
						Menu
					</NavLink>
					<NavLink to='/order/new'>Order</NavLink>
				</nav>

				<Form
					type={null}
					placeholder='Search for the order #'
					classForm={null}
				/>
			</header>
		</>
	)
}
