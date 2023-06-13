import { defineStore } from 'pinia'
import client from '@/services/httpClient'

const useAuthStore = defineStore('user', {
  state: () => ({
    user: null
  }),

  actions: {
    async signIn(email: string, password: string) {
      const res = await client.post('/users/login', {
        email,
        password
      })
      console.log(res)
    },
    async signUp(email: string, password: string) {
      const res = await fetch('https://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      const user = await res.json()
      this.user = user
    }
  }
})
