import React, {useState} from "react";
import {Modal} from "../Modal";
import {Carousel} from "../Carousel/Carousel";
import styles from './home.module.sass'
import {Banner1} from "../Banner/Banner1";
import {Banner2} from "../Banner/Banner2";

export const Home = () => {
    const [visible, setVisible] = useState(false)

    return (
        <div className={styles.home}>
            <Carousel/>
            <div className={styles.bottom}>
                <Banner1></Banner1>
                <Banner2></Banner2>
            </div>
            <Modal visible={visible} onClose={() => setVisible(false)} />
            <button onClick={() => setVisible(true)}>Show modal</button>
        </div>

    )
}
