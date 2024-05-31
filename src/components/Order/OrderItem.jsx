// €

export function OrderItem({ qty, name, ingredients, price }) {
	return (
		<>
			<ul>
				<li className='pizza'>
					<div className='pizza__info'>
						<p className='pizza__name'>
							{qty}x {name}
						</p>

						<div className='pizza__ingredients'>{ingredients}</div>

						<div className='pizza__actions'>
							<p className={'pizza__price'}>{`€${price}.00`}</p>
						</div>
					</div>
				</li>
				<hr />
			</ul>
		</>
	)
}
