// import { create } from 'apisauce'

// const apiClient = create({
//     baseURL: 'http://192.168.29.187:5000'
// })

// export default apiClient



import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://192.168.29.187:5000'
})

export default apiClient