import { MenuList } from './MenuList.jsx'
import { useEffect, useState } from 'react'

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

	return (
		<>
			{menu.map((pizzas, index) => (
				<MenuList key={index} pizzas={pizzas} />
			))}
		</>
	)
}
