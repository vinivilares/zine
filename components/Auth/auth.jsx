import styles from './auth.module.css'

export default function Auth() {
    return (
        <div className={styles.main}>
            <h2>Sign with</h2>
            <form className='form'>
                <div className={styles.controls}>
                    {/* <label htmlFor="email">Email:</label> */}
                    <input type="email" name="email" id="email" placeholder='Email' />
                </div>

                <div className={styles.controls}>
                    {/* <label htmlFor="password">Password:</label> */}
                    <input type="password" name="password" id="password" placeholder='Password' />
                </div>
                
                <div className={styles.actions}>
                    <button>Login</button>
                </div>
            </form>
            <hr />
            <div className={styles.actions}>
                <button>Google</button>
                <button>Apple</button>
                <button>Facebook</button>
                <p>Don't have an account. Sign up</p>
            </div>
        </div>
    )
}