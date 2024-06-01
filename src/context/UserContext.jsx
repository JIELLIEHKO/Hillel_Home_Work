import { createContext, useMemo, useState } from 'react'

export const UserContext = createContext(null)

export function UserContextProvider({ children }) {
	const [user, setUser] = useState('')
	const [orderId, setOrderId] = useState('')

	const contextValue = useMemo(
		() => ({ user, setUser, orderId, setOrderId }),
		[user, setUser, orderId, setOrderId]
	)

	return (
		<>
			<UserContext.Provider value={contextValue}>
				{children}
			</UserContext.Provider>
		</>
	)
}
