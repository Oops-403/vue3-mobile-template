import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const userToken = ref('')

    const setUserToken = (token: string) => {
        userToken.value = token
    }

    return {
        userToken,
        setUserToken
    }
})