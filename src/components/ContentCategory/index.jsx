import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { ContentDetails } from "../ContentDetails"
import styles from './contentCategory.module.css'

const ContentCategory = () => {

  const { state } = useLocation()
  const [selectedMovie, setSelectedMovie] = useState({})
  const [isShowDetail, setIsShowDetail] = useState(false)

  const handleDetailsMovie = (movie) => {
    setSelectedMovie(movie)
    setIsShowDetail(true)
  }

  return (
    <section className={styles.movie_info}>

      <Link className={styles.back_home} to='/'>Inicio</Link>

      {isShowDetail ?
        <ContentDetails
          selectedMovie={selectedMovie}
          setIsShowDetail={setIsShowDetail}
        /> : null
      }

      <div className={styles.movies_container}>
        {state.map(item => (
          <div
            className={styles.card_movie}
            key={item.title}
            onClick={() => handleDetailsMovie(item)}
          >
            <img src={item.image} alt={item.title} />
            <div className={styles.card_info}>
              <h3>{item.title}</h3>
              <p>Director: {item.director}</p>
              <p>Año de lanzamiento: {item.year}</p>
              <p>Calificación: {item.rating} / 10</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { ContentCategory }