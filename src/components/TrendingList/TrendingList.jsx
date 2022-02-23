import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from "../../shared/services/movies";

import styles from './trending-list.module.css'


const TrendingList = () => {
    const [data, setData] = useState([]);
    const location = useLocation()
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
        <li className={styles.item} key={film.id}>
            <Link className={styles.link} to={`/movies/${film.id}`} state={{from: location}}>
                <div>
                    <img className={styles.itemImage} src={ film.poster_path ? `https://image.tmdb.org/t/p/w500${film.poster_path}` : 'https://picsum.photos/200/300'} alt="" />
                    <p>{film.title ?? film.name}</p>
                </div>
            </Link>
        </li>
    ))

    return (
        <div className={styles.section}>
        <h2 className={styles.title}>Trending Today</h2>
        <ul className={styles.gallery}>
            {trendingFilms}
        </ul>
        </div>
    )
}

export default TrendingList;