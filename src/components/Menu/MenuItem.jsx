import './Menu.css'
import { Counter } from '../Counter/Counter.jsx'
import { Button } from '../Button/Button.jsx'
import { useState } from 'react'
// €
export function MenuItem({ img, name, ingredients, price, sold }) {
	const [showButton, setShowButton] = useState(false)

	const handleClickButton = () => {
		setShowButton(!showButton)
		console.log(`Pizza ${name} added to cart`)
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

						<div className='pizza__ingredients'>{ingredients} </div>

						<div className='pizza__actions'>
							<p
								className={!sold ? 'pizza__price' : 'pizza__price sold__price'}
							>
								{!sold ? `€${price}.00` : 'SOLD OUT'}
							</p>

							{showButton && !sold ? (
								<Counter onDelete={handleClickButton} />
							) : (
								!showButton &&
								!sold && (
									<div className='counter-button'>
										<Button onClick={handleClickButton}>Add to cart</Button>
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
