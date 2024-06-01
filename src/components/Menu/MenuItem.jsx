import './Menu.css'
import { Button } from '../Button/Button.jsx'
import {
	addToCart,
	decrement,
	deleteFromCart,
	increment
} from '../../redux/slices/cartSlice.js'
import { useDispatch, useSelector } from 'react-redux'

// €
export function MenuItem({ img, name, ingredients, price, sold, pizza }) {
	const dispatch = useDispatch()
	const items = useSelector(store => store.cart.cartItems)
	const cartItem = items.find(item => item.id === pizza.id)
	const qty = cartItem ? cartItem.qty : 0

	const handleDeleteFromCart = id => {
		dispatch(deleteFromCart(id))
	}

	const handleClickAddOrder = pizza => {
		dispatch(addToCart(pizza))
	}

	return (
		<>
			<ul>
				<li className='pizza'>
					<img
						src={img}
						className={!sold ? 'pizza__image' : 'pizza__image sold__image'}
						alt='pizza'
					/>

					<div className='pizza__info'>
						<p className='pizza__name'>{name}</p>

						<div className='pizza__ingredients'>{ingredients}</div>

						<div className='pizza__actions'>
							<p
								className={!sold ? 'pizza__price' : 'pizza__price sold__price'}
							>
								{!sold ? `€${price}.00` : 'SOLD OUT'}
							</p>

							{!sold && qty < 1 ? (
								<div className='counter-button'>
									<Button onClick={() => handleClickAddOrder(pizza)}>
										Add to cart
									</Button>
								</div>
							) : (
								!sold &&
								qty > 0 && (
									<div className='counter'>
										<div className='counter-button'>
											<Button onClick={() => dispatch(decrement(pizza.id))}>
												-
											</Button>
										</div>
										<p>{qty}</p>
										<div className='counter-button'>
											<Button onClick={() => dispatch(increment(pizza.id))}>
												+
											</Button>
										</div>
										<div className='counter-button'>
											<Button onClick={() => handleDeleteFromCart(pizza.id)}>
												Delete
											</Button>
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</li>
				<hr />
			</ul>
		</>
	)
}
