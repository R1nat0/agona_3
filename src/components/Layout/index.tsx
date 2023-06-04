import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import styles from './index.module.scss'

export const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <Header></Header>
            <main>
                <Outlet/>
            </main>
            <Footer></Footer>
        </div>
    )
}