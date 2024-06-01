import { Header } from '../Header.jsx'
import { OrderItem } from './OrderItem.jsx'
import { useSelector } from 'react-redux'

export function OrderId({}) {
	const { cartItems, totalPrice, priority, orderId } = useSelector(
		store => store.cart
	)

	return (
		<>
			<Header />
			<div style={{ marginTop: '5rem' }}>
				<h2>{`Order: #${orderId} status: preparing`}</h2>
				{priority === true && <h2>Priority</h2>}
				<div>
					{!!cartItems.length &&
						cartItems.map(pizza => (
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
					{priority === true && <p>{`Price priority: €8.00`}</p>}
					{priority === true && (
						<p>{`To pay on delivery: €${totalPrice + 8}.00`}</p>
					)}
				</div>
			</div>
		</>
	)
}
