import Auth from "../components/Auth/auth";

import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <div className={styles.main}>

      <div className={styles.col}>
        <h1 className={styles.title}>Zine</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio modi quia amet accusamus, officia consequatur cum alias mollitia necessitatibus ad eius ducimus, itaque repellat eum aut accusantium non ipsa.</p>
      </div>
      
      <div className={styles.col}>
        <Auth />
      </div>
    </div>
  )
}
