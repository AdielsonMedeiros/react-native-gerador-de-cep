import axios from  'axios'

const api = axios.create({
    baseUrl: 'http://viacep.com.br/ws'
})

export default api