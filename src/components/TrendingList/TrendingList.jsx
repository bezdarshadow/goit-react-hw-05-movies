import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getTrending } from "../../shared/services/films";


const TrendingList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchTrends = async () => {
            try{
                const { results } = await getTrending();
                setData(results)
            } catch(err) {
                setData([])
            }
        }

        fetchTrends();
    }, [])


    const trendingFilms = data.map(film => (
        <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title ?? film.name}</Link>
        </li>
    ))

    return (
        <>
        <h2>Trending Today</h2>
        <ul>
            {trendingFilms}
        </ul>
        </>
    )
}

export default TrendingList;