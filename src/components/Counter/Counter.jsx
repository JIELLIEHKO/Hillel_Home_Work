import { useState } from 'react'
import { Button } from '../Button/Button.jsx'

export function Counter({ onDelete }) {
	const [counter, setCounter] = useState(1)

	const handleClickCounterAdd = () => {
		setCounter(counter + 1)
	}

	const handleClickCounterRemove = () => {
		if (counter > 0) {
			setCounter(prevCounter => prevCounter - 1)
		}
	}

	return (
		<>
			<div className='counter'>
				<div className='counter-button'>
					<Button onClick={counter < 2 ? onDelete : handleClickCounterRemove}>
						-
					</Button>
				</div>
				<p>{counter}</p>
				<div className='counter-button'>
					<Button onClick={handleClickCounterAdd}>+</Button>
				</div>
				<div className='counter-button'>
					<Button onClick={onDelete}>Delete</Button>
				</div>
			</div>
		</>
	)
}
