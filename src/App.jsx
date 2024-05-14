import { Main } from './pages/Main.jsx'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login.jsx'
import { PageNotFound } from './pages/PageNotFound.jsx'
import { createContext, useMemo, useState } from 'react'

export const MyContext = createContext(null)

function App() {
	const [user, setUser] = useState('')

	const contextValue = useMemo(() => ({ user, setUser }), [user, setUser])

	return (
		<>
			<div className='wrapper'>
				<MyContext.Provider value={contextValue}>
					<Routes>
						<Route path='/menu' element={<Main />} />

						<Route path='/' element={<Login />} />

						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</MyContext.Provider>
			</div>
		</>
	)
}

export default App
