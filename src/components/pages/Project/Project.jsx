import React from 'react'
import dressImg from '../../img/dress.PNG'
import juegosImg from '../../img/3djuegos.PNG'
import nikeImg from '../../img/nike-card.PNG'
import portafolioImg from '../../img/portafolio.png'
import styles from "./Project.module.css"


const Project = () => {
  return (
    <div className={styles.body}>
      <h1>Proyectos</h1>
      
      <main id='projectPage' className={styles.gridProject}>
        <div className={styles.cardProject}>
          <h2>Dress Page</h2>
          <a href="https://examen1llm.netlify.app/"><img src={dressImg} alt=""/></a>
        </div>

        <div className={styles.cardProject}>
          <h2>3DJuegos Page</h2>
          <a href="https://3djuegos.netlify.app"><img src={juegosImg} alt="" /></a>
        </div>
        
        <div className={styles.cardProject}>
          <h2>Nike Page</h2>
          <a href="https://zapatillas-nike.netlify.app/"><img src={nikeImg} alt="" /></a>
        </div>

        <div className={styles.cardProject}>
          <h2>Portafolio Page</h2>
          <a href="https://marcosalvarado-portafolio-llm.netlify.app/"><img src={portafolioImg} alt="" /></a>
        </div>
      </main>
    </div>
  )
}

export default Project