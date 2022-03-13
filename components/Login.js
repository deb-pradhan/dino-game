import React from 'react';
import styles from '../styles/Login.module.css';
import {useMoralis} from "react-moralis";

function Login() {

    const {authenticate, authError}= useMoralis();

  return (
    <div className={styles.login_container}>
        <div className={styles.container}>
            <div className={styles.box}>
                <span></span>
                <div className={styles.content}>
                    <h2>Dino Game</h2>
                    <button className={styles.button} onClick={authenticate}>
                        Login with Moralis
                    </button>
                    {
                        authError &&(
                            <p className={styles.error}>
                                Error Connecting Account!
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login