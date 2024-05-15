import { Main } from './pages/Main.jsx'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login.jsx'
import { PageNotFound } from './pages/PageNotFound.jsx'

function App() {
	return (
		<>
			<div className='wrapper'>
				<Routes>
					<Route path='/menu' element={<Main />} />

					<Route path='/' element={<Login />} />

					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</div>
		</>
	)
}

export default App
