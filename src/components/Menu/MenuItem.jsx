import './Menu.css'
import { Button } from '../Button/Button.jsx'
import { useState } from 'react'
import { addToCart } from '../../redux/slices/cartSlice.js'
import { useDispatch } from 'react-redux'

// €
export function MenuItem({ img, name, ingredients, price, sold, pizza }) {
	const [counter, setCounter] = useState(0)
	const dispatch = useDispatch()

	const handleClickCounterPlus = () => {
		setCounter(counter + 1)
	}

	const handleClickCounterMinus = () => {
		if (counter > 0) {
			setCounter(prevCounter => prevCounter - 1)
		}
	}

	const handleClickCounterRemove = () => {
		setCounter(0)
	}

	const handleClickAddOrder = pizza => {
		dispatch(addToCart(pizza))
		setCounter(1)
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

							{!sold && counter < 1 ? (
								<div className='counter-button'>
									<Button onClick={() => handleClickAddOrder(pizza)}>
										Add to cart
									</Button>
								</div>
							) : (
								!sold &&
								counter > 0 && (
									<div className='counter'>
										<div className='counter-button'>
											<Button onClick={handleClickCounterMinus}>-</Button>
										</div>
										<p>{counter}</p>
										<div className='counter-button'>
											<Button onClick={handleClickCounterPlus}>+</Button>
										</div>
										<div className='counter-button'>
											<Button onClick={handleClickCounterRemove}>Delete</Button>
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
