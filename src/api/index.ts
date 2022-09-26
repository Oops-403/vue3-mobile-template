import axios from 'axios'

const request = axios.create({
    baseURL: import.meta.env.VITE_URL_PREFIX
})

request.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

request.defaults.timeout = 2500

export const Get = (url: string, params: any) => {
    return request.get(url, { params }).then((res: any) => res.data)
}

export const Post = (url: string, data: any) => {
    return request.post(url, data).then((res: any) => res.data)
}
