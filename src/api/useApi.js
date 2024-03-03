import axios from 'axios'

const api = 'http://45.8.96.37:8000/'
// const api = 'http://127.0.0.1:80/'


async function useApi(path) {
    return axios.get(api+path)
}

async function postApi(path, payload) {
    return axios.post(api+path, payload)
}





export async function getPrices() {
    return useApi('prices')
}

export async function postInfo(payload) {
    return postApi('userinfo', payload)
}

export async function postAction(text) {
    const payload = {
        action: text
    }
    return postApi('actioninfo', payload)
}

export async function postScrollStats(payload){
    return postApi('scroll-stats', payload)
}