import { useEffect, useState } from 'react'
import { Header } from '../Header.jsx'
import { OrderItem } from './OrderItem.jsx'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export function OrderId() {
	const { id } = useParams()
	const [order, setOrder] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchOrder = async () => {
			try {
				const response = await fetch(
					`https://react-fast-pizza-api.onrender.com/api/order/${id}`
				)
				const result = await response.json()

				if (result.status === 'success') {
					setOrder(result.data)
				} else {
					setError('Failed to fetch order details.')
				}
			} catch (error) {
				setError('Failed to fetch order details.')
			} finally {
				setLoading(false)
			}
		}

		fetchOrder()
	}, [id])

	if (loading) return <p>Loading...</p>
	if (error) return <p>{error}</p>

	const items = useSelector(store => store.cart.cartItems)

	const calculateTotalPrice = () => {
		return items.reduce(
			(total, pizza) => total + pizza.qty * pizza.unitPrice,
			0
		)
	}

	const totalPrice = calculateTotalPrice()
	return (
		<>
			<Header />
			<div style={{ marginTop: '5rem' }}>
				<h2>
					Order #{order.id} status: {order.status}
				</h2>

				<div>
					{!!items.length &&
						items.map(pizza => (
							<OrderItem
								key={pizza.name}
								name={pizza.name}
								qty={pizza.qty}
								ingredients={pizza.ingredients.map((ingredient, index) => {
									return <p key={index}>{ingredient}</p>
								})}
								price={pizza.unitPrice}
							/>
						))}
				</div>
				<div>
					<p>{`Price pizza: €${totalPrice}.00`}</p>
					<p>{`To pay on delivery: €${totalPrice}.00`}</p>
				</div>
			</div>
		</>
	)
}
