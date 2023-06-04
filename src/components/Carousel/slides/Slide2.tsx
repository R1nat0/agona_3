import styles from "./slide.module.sass";
import React from "react";
import {Button} from "../../button/Button";
import img2 from "../../../assets/img2.png";
import cx from 'classnames'

export const Slide2 = () => {
    return(
        <div className={cx(styles.container, styles.container2)}>
            <div className={styles.left}>
                <h1 className={styles.title}>
                    А вы знали...
                </h1>
                <h6 className={styles.text}>
                    что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет?
                </h6>
                <div className={styles.btn}>
                    <Button theme={"GREEN16"}>Узнать больше</Button>
                </div>

            </div>
            <div className={styles.right2}>
                <img className={styles.img2} src={img2} alt=""/>
            </div>

        </div>
    )
}