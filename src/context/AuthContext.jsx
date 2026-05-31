import { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext(null)

function normalize(supabaseUser) {
  if (!supabaseUser) return null
  return {
    id:        supabaseUser.id,
    email:     supabaseUser.email,
    name:      supabaseUser.user_metadata?.full_name
                 || supabaseUser.user_metadata?.name
                 || supabaseUser.email?.split('@')[0]
                 || 'User',
    createdAt: supabaseUser.created_at,
  }
}

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Clear old localStorage keys from pre-Supabase system
    localStorage.removeItem('savateck_user')
    localStorage.removeItem('savateck_users')

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(normalize(session?.user ?? null))
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(normalize(session?.user ?? null))
    })

    return () => subscription.unsubscribe()
  }, [])

  async function register({ name, email, password }) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    })
    if (error) return { error: error.message }
    return { ok: true }
  }

  async function login({ email, password }) {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return { error: error.message }
    return { ok: true }
  }

  async function logout() {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
