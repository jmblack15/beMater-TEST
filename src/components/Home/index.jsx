import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import styles from './home.module.css';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('../../../movies.json');
      const data = await response.json();
      setMovies(data.movies);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <section className={styles.home}>
      <div className={styles.select_category}>
        {isLoading ?
          <ClipLoader
            color={'#FFF'}
            loading={isLoading}
            size={200}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> :
          <>
            {movies?.map(movie => (
              <Link
                to={`/${movie.type}`}
                state={movie.movies}
                className={styles.card_select}
                key={movie.type}
              >
                <h2>{movie.type}</h2>
              </Link>
            ))}
          </>
        }
      </div>
    </section>
  );
};

export { Home };
