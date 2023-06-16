import { defineStore } from 'pinia'

const useAuthStore = defineStore('user', {
  state: () => ({
    credentials: {
      token: localStorage.getItem('token') || '',
      userRole: localStorage.getItem('userRole') || ''
    }
  }),
  getters: {
    isLoggedIn: (state) => state.credentials.token && state.credentials.userRole
  },
  actions: {
    setToken(token: string) {
      this.credentials.token = token
      localStorage.setItem('token', token)
    },
    setUserRole(role: string) {
      this.credentials.userRole = role
      localStorage.setItem('userRole', role)
    },
    deleteToken() {
      this.credentials.token = ''
      localStorage.removeItem('token')
    },
    deleteUserRole() {
      this.credentials.userRole = ''
      localStorage.removeItem('userRole')
    }
  }
})

export { useAuthStore }
