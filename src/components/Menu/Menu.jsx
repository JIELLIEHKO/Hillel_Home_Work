import { MenuList } from './MenuList.jsx'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../../redux/slices/cartSlice.js'

export function Menu() {
	const dispatch = useDispatch()
	const pizzas = useSelector(state => state.cart.pizzas)

	useEffect(() => {
		dispatch(getAllPizzas())
	}, [dispatch])

	const data = useContext(UserContext)
	return (
		<>
			<div className='menu'>
				<div>
					<h1>User: {data.user}</h1>
				</div>
				<MenuList pizzas={pizzas} />
			</div>
		</>
	)
}
