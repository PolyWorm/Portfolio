import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar.js'

export default function Home() {
  return (
    <div>
      <Navbar/>
        <div className={styles.landing}>
          <div className={styles.info}>
            <h1 className={styles.heading}>I&apos;m Justin Li.</h1>
            <p className={styles.bodytext}>
                I&apos;m a developer <br/>
                focused on design <br/>
                and functionality.
            </p>
            <button className={styles.projectbutton}>
            VIEW WORK
          </button>
            <div className={styles.mobileanimation}>
              <div className={styles.mobilebubble1}/>
              <div className={styles.mobilebubble2}/>
              <div className={styles.mobilebubble3}/>
              <div className={styles.mobilebubble4}/>
              <div className={styles.mobilebubble5}/>
              <div className={styles.mobilebubble6}/>
            </div>
          </div>
          <div className={styles.graphic}>
            <div className={styles.graphicwrapper}>
              <div className={styles.bubble1}/>
              <div className={styles.bubble2}/>
              <div className={styles.bubble3}/>
              <div className={styles.bubble4}/>
              <div className={styles.bubble5}/>
              <div className={styles.bubble6}/>
              <div className={styles.fadeInAnimation3, styles.face}/>
            </div>
          </div>
        </div>
        <div className={styles.projects}>
          <h1 className={styles.heading}>Projects</h1>
          <p>hello</p>
        </div>
      </div>
  )
}
