import { MenuItem } from './MenuItem.jsx'

export function MenuList({ pizzas }) {
	return (
		<>
			{!!pizzas.length &&
				pizzas.map(pizza => (
					<MenuItem
						key={pizza.name}
						img={pizza.imageUrl}
						name={pizza.name}
						ingredients={pizza.ingredients.map((ingredient, index) => {
							return <p key={index}>{ingredient}</p>
						})}
						price={pizza.unitPrice}
						sold={pizza.soldOut && true}
						pizza={pizza}
					/>
				))}
		</>
	)
}
