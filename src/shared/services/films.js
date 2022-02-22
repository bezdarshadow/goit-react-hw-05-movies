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


export async function getMovieById (filmId) {
    const {data} = await instance.get(`/movie/${filmId}`)
    console.log(data)
    return data;
}



