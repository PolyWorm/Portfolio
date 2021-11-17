import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar/>
        <div className={styles.landing}>
          <div className={styles.info}>
            <h1 className={styles.heading}>I'm Justin Li.</h1>
            <p className={styles.bodytext}>
                I'm a developer <br/>
                focused on design <br/>
                and functionality.
            </p>
            <button className={styles.projectbutton}>
            VIEW WORK
          </button>
          </div>
          <div className={styles.graphic}>
            <div className={styles.graphicwrapper}>
              <div className={styles.bubble1}/>
              <div className={styles.bubble2}/>
              <div className={styles.bubble3}/>
              <div className={styles.bubble4}/>
              <div className={styles.bubble5}/>
              <div className={styles.bubble6}/>
              <img className={styles.fadeInAnimation3, styles.face} src="/justinface.svg"/>
            </div>
          </div>
        </div>
        <div className={styles.projects}>
          <h1 className={styles.heading}>Projects</h1>
        </div>
      </div>
  )
}
