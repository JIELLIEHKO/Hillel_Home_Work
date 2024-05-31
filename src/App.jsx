import { Main } from './pages/Main.jsx'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login.jsx'
import { PageNotFound } from './pages/PageNotFound.jsx'
import { Order } from './pages/Order.jsx'
import { OrderId } from './components/Order/OrderId.jsx'

function App() {
	return (
		<>
			<div className='wrapper'>
				<Routes>
					<Route path='/menu' element={<Main />} />

					<Route path='/' element={<Login />} />

					<Route path='/order/new' element={<Order />} />

					<Route path='/order/:id' element={<OrderId />} />

					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</div>
		</>
	)
}

export default App
