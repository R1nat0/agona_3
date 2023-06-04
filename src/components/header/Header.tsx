import React, {FC, useState} from "react";
import styles from "./header.module.scss"
import logo from '../../assets/logo.png'
import locationIcon from '../../assets/locationIcon.png'
import profileImage from '../../assets/profileImage.png'
import priceIcon from '../../assets/Frame 3.png'
import {NavLink, useLocation} from "react-router-dom";
import cn from "classnames"
import {Modal} from "../Modal";
import classnames from 'classnames'

export const Header:FC = () => {
    const [visible, setVisible] = useState(false);

    const location = useLocation();

    const [prevPath, setPrevPath] = useState('')

    const isActive = (path: string) => {
        const active = location.pathname === path;
        if(active && prevPath !== path){
            setPrevPath(path);
        }
        return active;
    };

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.leftside}>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <ul className={styles.list}>
                        <nav className={styles.navList}>
                            <li>
                                <NavLink to="/home" >
                                    <button className={isActive('/home') ? `${styles.btn} ${styles.active}` : styles.btn}>Главная</button>
                                </NavLink>
                            </li>
                            <li><button className={styles.btn}>Пункты сбора</button></li>
                            <li>
                                <NavLink to="/ecomarket">
                                {/*<NavLink to="/ecomarket" className={({isActive}) => cn(styles.isActiveLink)}>*/}
                                <button className = {isActive('/ecomarket') ? `${styles.btn} ${styles.active}` : styles.btn}>ЭкоМаркет</button>
                                </NavLink>
                            </li>

                            <li><button className={styles.btn}>О сервисе</button></li>
                        </nav>

                    </ul>
                </div>

                <div className={styles.userInfo}>
                    <div className={styles.location}>
                        <img className={styles.locationIcon} src={locationIcon} alt="location icon" />
                        <p className={styles.discription}>Казань</p>
                    </div>
                    <div className={styles.price}>
                        <img className={styles.priceIcon} src={priceIcon} alt="price icon" />
                        <p className={styles.discription}>1000</p>
                    </div>
                    <div className={styles.user}>
                        <Modal visible={visible} onClose={() => setVisible(false)} />
                        <button className={styles.user} onClick={() => setVisible(true)}>
                            <img className={styles.profileImage} src={profileImage} alt="profile image" />
                            <p className={styles.discription}>Алексей</p>
                        </button>

                    </div>
                </div>
            </div>
            <hr className={styles.hr}/>
        </div>
    )
}