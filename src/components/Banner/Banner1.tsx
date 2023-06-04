import React from "react";
import styles from './banner.module.sass'
import arrow from '../../assets/arrow.svg'
import map from '../../assets/map.png'

export const Banner1 = () => {
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <h2 className={styles.bold}>Пункты сбора</h2>
                <h6 className={styles.text}>Посмотри, где в товем городе можно сдать вторсырье на переработку</h6>
                <button className={styles.btn}>
                    <img className={styles.arrow} src={arrow} alt="arrow icon"/>
                </button>
            </div>
            <div className={styles.right}>
                <img className={styles.img} src={map} alt="map img"/>
            </div>
        </div>
    )
}