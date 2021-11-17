import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
      <div className={styles.navbar}>
        <img className={styles.logo} src="/finallogo.svg"/>
        <ul className={styles.buttons}>
          <li className={styles.link}>
            PROJECTS
          </li>
          <li className={styles.link}>
            ABOUT
          </li>
        </ul>
      </div>
    )
  }