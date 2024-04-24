import {pizzas} from '/data.js'
import {MenuItem} from "./MenuItem.jsx";


export function MenuList() {

    return (<>

        {pizzas.map((pizza) => {
            return <MenuItem
                key={pizza.name}
                img={pizza.imageUrl}
                name={pizza.name}
                ingredients={pizza.ingredients.map((ingredient) => {
                    return (<p
                        key={ingredient}
                    >
                        {ingredient}
                    </p>)
                })}
                price={pizza.unitPrice}
                sold={pizza.soldOut && true}
            />
        })}

    </>);
}