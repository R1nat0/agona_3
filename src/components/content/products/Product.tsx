import React from "react";
import {IProduct} from "../../../models";
import styles from './products.module.scss'


interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps){
    return (
        <div className={styles.card}>
            <img src={product.image} className={styles.productPic} alt={product.title} />
            <div className={styles.card_text}>
                <p className={styles.bold}> { product.title } </p>
                <p className={styles.grey}>{ product.category}</p>
                <div className={styles.price}>
                    <img className={styles.priceLogo} src={require("../../../assets/Frame 3.png")} alt="pic"/>
                    <h6 className={styles.bold1}> {product.price} </h6>
                </div>
            </div>
        </div>
    )

}