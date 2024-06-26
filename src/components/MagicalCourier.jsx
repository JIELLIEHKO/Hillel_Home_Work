import { Button } from './Button/Button.jsx'
import { useState } from 'react'
import { reference } from '../../data.js'

const Goat = reference[0].src

export function MagicalCourier() {
	const [changeImage, setChangeImage] = useState(Goat)
	const [activeButtonIndex, setActiveButtonIndex] = useState(0)

	function handleButtonClick(src, index) {
		setChangeImage(src)
		setActiveButtonIndex(index)
	}

	return (
		<>
			<div className='container-courier'>
				<h1>Home Work 1</h1>
				<h2>
					Make a choice!
					<br />
					<span className='text-yellow'>
						What magical courier will deliver you pizza?
					</span>
				</h2>
				<div className='img'>
					<img src={changeImage} alt='img' />
				</div>

				<div className='container-button'>
					{reference.map((value, index) => {
						return (
							<Button
								key={index}
								onClick={() => handleButtonClick(value.src, index)}
								isActive={index === activeButtonIndex}
							>
								{value.name}
							</Button>
						)
					})}
				</div>
			</div>
		</>
	)
}
