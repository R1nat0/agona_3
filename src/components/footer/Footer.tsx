import React, { FC } from 'react';
import styles from './footer.module.scss'
import phoneIcon from '../../assets/phoneIcon.png'
import postIcon from '../../assets/postIcon.png'
export const Footer: FC = () => {
    return(
        <div className={styles.footer}>
            <hr/>
            <div className={styles.info}>
                <div className={styles.post}>
                    <img src={postIcon} alt="post icon"/>
                    <p>info@ecorus.ru</p>
                </div>
                <div className={styles.number}>
                    <img src={phoneIcon} alt="phone icon"/>
                    <p>+7 (800) 880-88-88</p>
                </div>
            </div>
        </div>
    )
}
