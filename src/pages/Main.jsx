import { MagicalCourier } from '../components/MagicalCourier.jsx'
import { Menu } from '../components/Menu/Menu.jsx'
import { useEffect, useState } from 'react'
import { Header } from '../components/Header.jsx'

export function Main() {
	const [menuLoaded, setMenuLoaded] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setMenuLoaded(true)
		}, 1000)
	}, [])

	return (
		<>
			<Header />

			<main className='main'>
				<Menu />

				{menuLoaded && <MagicalCourier />}
			</main>
		</>
	)
}
