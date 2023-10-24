import request from './request'

export function login(data) {
    return request.post("api/login", { data })
}

export function signup(data) {
    return request.post("api/signup", { data })
}