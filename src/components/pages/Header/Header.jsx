import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faEnvelope, faDiagramProject, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.body}>
        <nav>
          <div className={styles.boxes}>
            <FontAwesomeIcon className={styles.icons} icon={faHouse} />
            <a href='./Header' className={styles.links}>Inicio</a>
          </div>

          <div className={styles.boxes}>
            <FontAwesomeIcon className={styles.icons} icon={faUser} />
            <a href='#landingPage' className={styles.links}>Info</a>
          </div>

          <div className={styles.boxes}>
            <FontAwesomeIcon className={styles.icons} icon={faDiagramProject} />
            <a href='#projectPage' className={styles.links}>Projects</a>
          </div>

          <div className={styles.boxes}>
            <FontAwesomeIcon className={styles.icons} icon={faLightbulb} />
            <a href='#servicesPage' className={styles.links}>Services</a>
          </div>

          <div className={styles.boxes}>
            <FontAwesomeIcon className={styles.icons} icon={faEnvelope} />
            <a href='#contactPage' className={styles.links}>Contacto</a>
          </div>
        </nav>
    </header>
  )
};

export default Header