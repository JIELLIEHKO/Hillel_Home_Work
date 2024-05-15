import { MenuList } from './MenuList.jsx'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext.jsx'

export function Menu() {
	const [menu, setMenu] = useState([])

	useEffect(() => {
		const getAllPizzas = async () => {
			try {
				const res = await fetch(
					'https://react-fast-pizza-api.onrender.com/api/menu'
				)
				const data = await res.json()

				if (!res.ok) {
					throw new Error('Error fetching pizza data.')
				}

				setMenu(data.data)
			} catch (error) {
				console.error(error.message)
			}
		}
		getAllPizzas()
	}, [])

	const data = useContext(UserContext)
	return (
		<>
			<div className='menu'>
				<div>
					<h1>User: {data.user}</h1>
				</div>
				<MenuList pizzas={menu} />
			</div>
		</>
	)
}
