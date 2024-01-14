import React from 'react'
import backfrontImg from '../../img/backfront.png'
import remotoImg from '../../img/remoto.png'
import mantenimientoImg from '../../img/mantenimiento.png'
import styles from "./Services.module.css" 

const Services = () => {
  return (
    <article id='servicesPage' className={styles.pageServices}>
      <h2>Servicios</h2>
      <main className={styles.servicesGrid}>
        <div className={styles.servicesBox}>
          <h3>Backend & Frontend</h3>
          <img className={styles.backFront} src={backfrontImg} alt="" />
        </div>
        <div className={styles.servicesBox}>
          <h3>Servicio remoto</h3>
          <img className={styles.normalImg} src={remotoImg} alt="" />
        </div>
        <div className={styles.servicesBox}>
          <h3>Mantenimiento</h3>
          <img className={styles.normalImg} src={mantenimientoImg} alt="" />
        </div>
      </main>
    </article>
  )
}

export default Services