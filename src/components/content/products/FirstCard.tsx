import priceIcon from '../../../assets/Frame 3.png'
import styles from './firstcard.module.scss'


export const FirstCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.textBalance}>
                    <h6>На вашем балансе</h6>
                    <div className={styles.price}>
                        <img className={styles.icon} src={priceIcon} alt="price icon"/>
                        <h6>200</h6>
                    </div>
                </div>
                <h6 className={styles.change}>Вы можете обменять их на скидку 200 руб.</h6>
            </div>
            <button className={styles.cardButton}>Получить промокод</button>
        </div>
    )
}