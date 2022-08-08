import styles from './auth.module.css'
import { AiFillFacebook, AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';

export default function Auth() {
    const [auth, setAuth] = useState('login')

    return (
        <>
            {auth === 'login' ? (
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

                    <hr className={styles.hr} />

                    <div className={styles.actions}>
                        <button><FcGoogle className={styles.icons} /> Sign up with Google</button>
                        <button><AiFillApple className={styles.icons} /> Sign up with Apple</button>
                        <button><AiFillFacebook className={`${styles.icons} ${styles.facebook}`} /> Sign up with Facebook</button>
                        <p>Don't have an account. <span className={styles.span} onClick={() => setAuth('signup')}>Sign up</span></p>
                    </div>
                </div>
            ) : (
                <div className={styles.main}>
                    <h2>Sign up</h2>
                    <form className={styles.form}>
                        <div className={styles.controls}>
                            <input type="text" name="username" id="username" placeholder='Username' />
                        </div>
                        
                        <div className={styles.controls}>
                            <input type="email" name="email" id="email" placeholder='Email' />
                        </div>

                        <div className={styles.controls}>
                            <input type="password" name="password" id="password" placeholder='Password' />
                            <input type="password" name="password" id="password" placeholder='Repeat Password' />
                        </div>

                        <div className={styles.actions}>
                            <button>Create Account</button>
                        </div>
                    </form>

                    <div className={styles.actions}>
                        
                        <p>Already have an account. <span className={styles.span} onClick={() => setAuth('login')}>Login</span></p>
                    </div>
                </div>
            )}
        </>
    )
}