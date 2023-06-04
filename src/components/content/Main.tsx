import styles from "../../index.module.scss";
import {Line} from "./line/Line";
import {CheckboxPage} from "./checkbox/CheckboxPage";
import {FirstCard} from "./products/FirstCard";
import {Product} from "./products/Product";
import {products} from "../../data/products";
import React from "react";

export const Main = () => {
    return (
        <div className={styles.mainContent}>
            <Line/>
            <div className={styles.centerContent}>
                <CheckboxPage/>
                <div className={styles.container}>
                    <FirstCard/>
                    <Product product={ products[0] }/>
                    <Product product={ products[1] }/>
                    <Product product={ products[2] }/>
                    <Product product={ products[3] }/>
                    <Product product={ products[4] }/>
                </div>
            </div>
        </div>
    )
}