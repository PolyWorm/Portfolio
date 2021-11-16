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
        </div>
      </div>
    </div>
  )
}
