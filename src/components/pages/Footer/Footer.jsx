import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.boxFooter}>
        <p>No te arrepentirás de trabajar con nosotros</p>
        <p className={styles.copyright}><FontAwesomeIcon className={styles.copyIcon} icon={faCopyright} />Copyright reserved to Marcos Alvarado Martínez</p>
    </footer>
  )
}

export default Footer