import { createContext, useMemo, useState } from 'react'

export const UserContext = createContext(null)

export function UserContextProvider({ children }) {
	const [user, setUser] = useState('')

	const contextValue = useMemo(() => ({ user, setUser }), [user, setUser])

	return (
		<>
			<UserContext.Provider value={contextValue}>
				{children}
			</UserContext.Provider>
		</>
	)
}
