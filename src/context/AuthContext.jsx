import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('savateck_user')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })

  const [users, setUsers] = useState(() => {
    try {
      const stored = localStorage.getItem('savateck_users')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    if (user) localStorage.setItem('savateck_user', JSON.stringify(user))
    else localStorage.removeItem('savateck_user')
  }, [user])

  useEffect(() => {
    localStorage.setItem('savateck_users', JSON.stringify(users))
  }, [users])

  function register({ name, email, password }) {
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { error: 'An account with this email already exists.' }
    }
    const newUser = { id: Date.now(), name, email, password, createdAt: new Date().toISOString() }
    setUsers(prev => [...prev, newUser])
    const { password: _, ...safeUser } = newUser
    setUser(safeUser)
    return { ok: true }
  }

  function login({ email, password }) {
    const found = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )
    if (!found) return { error: 'Incorrect email or password.' }
    const { password: _, ...safeUser } = found
    setUser(safeUser)
    return { ok: true }
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
