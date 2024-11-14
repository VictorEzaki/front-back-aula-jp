import api from './api'

// user = { name: '', email: '', senha: '' }
export const createUser = async (user) => {
    const response = await api.post('/person', user)
    return response.data
}

export const loginUser = async (email, password) => {
    const body = { email, password }
    const response = await api.post('/person/login', body)
    return response.data
}

export const sessionUser = async () => {
    const response = await api.get('/person/session')
    console.log(response)
    return response.data
}