import { useState } from "react";
import styles from './search-form.module.css'

const MoviesSearchForm = ({onSubmit}) => {
    const [search, setSearch] = useState('')

    const getInputValue = (event) => {
        const {value} = event.target;
        setSearch(value)
    }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(search);
        setSearch('')
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <input className={styles.input} name="search" type="text" value={search} onChange={getInputValue} required placeholder="Search movies"/>
            <button className={styles.button} type="submit"></button>
        </form>
    )
}

export default MoviesSearchForm;