import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '933b4fa86956fa4d472b102b5087182d',
    }
})

export async function getTrending () {
    const {data} = await instance.get('/trending/all/day')
    return data;
}

export async function getMoviesBySearch (query) {
    const {data} = await instance.get(`/search/movie`, {
        params: {
            query,
            page: 1,
        }
    })
    return data;
}


export async function getMovieById (filmId) {
    const {data} = await instance.get(`/movie/${filmId}`)
    return data;
}

export async function getMovieCast (filmId) {
    const {data} = await instance.get(`/movie/${filmId}/credits`)
    return data;
}

export async function getMovieReviews (filmId) {
    const {data} = await instance.get(`/movie/${filmId}/reviews`)
    return data;
}

