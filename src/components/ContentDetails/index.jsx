/* eslint-disable react/prop-types */
import styles from './contentDetails.module.css'

const ContentDetails = ({ selectedMovie, setIsShowDetail }) => {
  return (
    <div className={styles.details_container}>

      <div className={styles.shadow_container}
      >
        <div className={styles.info_container}>
          <video controls src={selectedMovie.video}></video>
          <p>{selectedMovie.description}</p>

          <div
            className={styles.button_close}
            onClick={() => setIsShowDetail(false)}
          >
            <p>Cerrar</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ContentDetails }