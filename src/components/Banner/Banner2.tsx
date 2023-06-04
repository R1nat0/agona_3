import React from "react";
import styles from './banner.module.sass'
import arrow from '../../assets/arrow.svg'
import pict2 from '../../assets/pict2.png'
import {NavLink} from "react-router-dom";

export const Banner2 = () => {
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <h2 className={styles.bold}>ЭкоМаркет</h2>
                <h6 className={styles.text}>Используй заработанные экокоины для покупки товаров из переработанных материалов</h6>
                <button className={styles.btn}>
                    <NavLink to='/ecomarket'>
                        <img className={styles.arrow} src={arrow} alt="arrow icon"/>
                    </NavLink>

                </button>
            </div>
            <div className={styles.right}>
                <img className={styles.img2} src={pict2} alt="img"/>
            </div>
        </div>
    )
}