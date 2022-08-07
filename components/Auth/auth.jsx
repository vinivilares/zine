import styles from './auth.module.css'
import { AiFillFacebook, AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export default function Auth() {
    return (
        <div className={styles.main}>
            <h2>Sign with</h2>
            

            <form className={styles.form}>
                <div className={styles.controls}>
                    <input type="email" name="email" id="email" placeholder='Email' />
                </div>

                <div className={styles.controls}>
                    <input type="password" name="password" id="password" placeholder='Password' />
                </div>

                <div className={styles.actions}>
                    <button>Login</button>
                </div>
            </form>

            <hr className={styles.hr}/>

            <div className={styles.actions}>
                <button><FcGoogle className={styles.icons} /> Sign up with Google</button>
                <button><AiFillApple className={styles.icons} /> Sign up with Apple</button>
                <button><AiFillFacebook className={`${styles.icons} ${styles.facebook}`} /> Sign up with Facebook</button>
                <p>Don't have an account. Sign up</p>
            </div>
        </div>
    )
}