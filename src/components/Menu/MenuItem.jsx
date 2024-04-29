import './Menu.css'
// €
export function MenuItem({ img, name, ingredients, price, sold }) {
	const handleClickButton = () => {
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
							{!sold && (
								<button onClick={handleClickButton} className='button'>
									Add to cart
								</button>
							)}
						</div>
					</div>
				</li>
				<hr />
			</ul>
		</>
	)
}
