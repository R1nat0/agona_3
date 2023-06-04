import React from 'react';
import {Checkbox} from './Checkbox';
import {Checkbox2} from './Checkbox2';
import {Checkbox3} from './Checkbox3';
import styles from './checkbox.module.scss'
export const CheckboxPage = () => {
    return (
        <div className={styles.cb}>
            <div className={styles.checkboxpage}>
                <Checkbox></Checkbox>
                <Checkbox2></Checkbox2>
                <Checkbox3></Checkbox3>
            </div>
            <button className={styles.btn}>
                <p>Сбросить фильтры</p>
            </button>
        </div>

    )
}