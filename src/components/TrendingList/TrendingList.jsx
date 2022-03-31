import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from "../../shared/services/movies";

import styles from './trending-list.module.css'


const TrendingList = () => {
    const [data, setData] = useState({
        films: [],
        loading: false,
        error: null
      });
    const location = useLocation()
    useEffect(() => {
        
        const fetchTrends = async () => {
            try{
                setData(prevData => ({
                    ...prevData,
                    loading: true,
                  }))
                const { results } = await getTrending();
                setData({
                    films: [...results],
                    loading: false,
                    error: null
                })
            } catch(err) {
                setData({
                    films: [],
                    loading: false,
                    error: err
                })
            }
        }

        fetchTrends();
    }, [])


    const trendingFilms = data.films.map(film => (
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
        {data.loading && <p>Идёт поиск</p>}
        {data.error && !data.loading && <p>Ошибка поиска</p>}
        {Boolean(data.films.length) && !data.loading && !data.error && <ul className={styles.gallery}>
            {trendingFilms}
        </ul>
       }
        </div>
    )
}

export default TrendingList;