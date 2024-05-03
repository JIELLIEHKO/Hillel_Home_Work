import { MenuItem } from './MenuItem.jsx'

export function MenuList({ pizzas }) {
	return (
		<>
			<MenuItem
				key={pizzas.name}
				img={pizzas.imageUrl}
				name={pizzas.name}
				ingredients={pizzas.ingredients.map((ingredient, index) => {
					return <p key={index}>{ingredient}</p>
				})}
				price={pizzas.unitPrice}
				sold={pizzas.soldOut && true}
			/>
		</>
	)
}
