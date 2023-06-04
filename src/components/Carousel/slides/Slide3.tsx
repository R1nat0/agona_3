import styles from "./slide.module.sass";
import React from "react";
import {Button} from "../../button/Button";
import img3 from "../../../assets/img3.png";
import cx from 'classnames'

export const Slide3 = () => {
    return(
        <div className={cx(styles.container, styles.container3)}>
            <div className={styles.left}>
                <h1 className={styles.title}>
                    Что с масками?
                </h1>
                <h6 className={styles.text}>
                    Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку.
                </h6>
                <div className={styles.btn}>
                    <Button theme={"GREEN16"}>Условия сервиса</Button>
                </div>
            </div>
            <div>
                <img className={styles.img3} src={img3} alt=""/>
            </div>

        </div>
    )
}