import styles from "./slide.module.sass";
import React from "react";
import {Button} from "../../button/Button";
import img1 from "../../../assets/img1.png"

export const Slide1 = () => {
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.title}>
                    Сделаем мир чище
                </h1>
                <h6 className={styles.text}>
                    Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов
                </h6>
                <div className={styles.btn}>
                    <Button theme={"GREEN16"}>Условия сервиса</Button>
                </div>

            </div>
            <div className={styles.right}>
                <img className={styles.img} src={img1} alt=""/>
            </div>
        
        </div>
    )
}
