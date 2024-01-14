import React from 'react'
import imgDeveloper from "../../img/perfil.png"
import githubImg from "../../img/github.png"
import netlifyImg from "../../img/netlify.png"
import instagramImg from "../../img/instagram.png"
import xImg from "../../img/x.png"
import styles from "./Landing.module.css"

const Landing = () => {
  return (
    <section id='landingPage'>
        <main className={styles.landCard}>
            <div className={styles.landContent}>
                <img className={styles.landImg} src={imgDeveloper} alt="header"/>
                <h2>Marcos Alvarado Martínez</h2>
                <span>Técnico en Sistemas Microinformáticos en Red</span>
                <div className={styles.socials}>
                  <a href="https://github.com/marcosalvaradomartinez"><img src={githubImg} alt="" /></a>
                  <a href="https://app.netlify.com/teams/marcosalvaradomartinez/overview"><img src={netlifyImg} alt="" /></a>
                  <a href="https://www.instagram.com/akakinos/"><img src={instagramImg} alt="" /></a>
                  <a href="https://twitter.com/aka_kinos"><img src={xImg} alt="" /></a>
                </div>
            </div>
        </main>

    </section>
  )
}

export default Landing;