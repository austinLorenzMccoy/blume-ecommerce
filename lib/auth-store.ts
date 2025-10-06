import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface User {
  id: number
  email: string
  name: string
  role: "customer" | "admin"
}

interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        // TODO: Replace with actual API call
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock authentication - in production, validate against backend
        if (email && password) {
          const user: User = {
            id: 1,
            email,
            name: email.split("@")[0],
            role: email.includes("admin") ? "admin" : "customer",
          }
          set({ user, isAuthenticated: true })
          return true
        }
        return false
      },
      register: async (name: string, email: string, password: string) => {
        // TODO: Replace with actual API call
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock registration
        if (name && email && password) {
          const user: User = {
            id: Date.now(),
            email,
            name,
            role: "customer",
          }
          set({ user, isAuthenticated: true })
          return true
        }
        return false
      },
      logout: () => {
        set({ user: null, isAuthenticated: false })
      },
    }),
    {
      name: "blume-auth",
    },
  ),
)
