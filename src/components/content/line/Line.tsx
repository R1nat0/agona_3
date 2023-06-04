import styles from './line.module.scss'

export const Line = () => {
    return (
        <div className={styles.line}>
            <h1>ЭкоМаркет</h1>
            <div className={styles.buttons}>
                <button className={styles.btn}>По популярности</button>
                <button className={styles.btn}>По цене</button>
                <button className={styles.btn}>По новизне</button>
            </div>
        </div>
    )
}