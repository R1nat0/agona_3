import React, { useState } from "react";
import styles from "../index.module.sass";
import {Field, Form, Formik} from "formik";
import {Button} from "../../button/Button";
import * as yup from "yup";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

interface RegistrationWithCodeProps {
    onFormSwitch: (formName: string) => void;
}
export const RegistrationWithCode = ({onFormSwitch}:RegistrationWithCodeProps) => {
    const validationSchema = yup.object({
        phone: yup.string().required('Обязательное поле'),
        password: yup.string().required('Обязательное поле'),
    })
    return (
        <div className={styles.firstBlock}>
            <h3>Ввести код</h3>
            <p className={styles.text1}>Введите код отправленный вам на телефон</p>
            <p className={styles.green}>+7 (917) 888 88 88</p>
            <Formik
                initialValues={{
                    phone: '',
                    password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values)=>{
                    console.log(values)}
                }
            >
                {({errors}) => (
                    <Form>
                        <label htmlFor="code"></label>
                        <Field className={styles.inputRed} id="code" name="code" placeholder="Код"/>
                        {/*{errors.phone && <div>{errors.phone}</div>}*/}
                        {errors.phone && <div className={styles.error}><p className={styles.red}>Введите действительный код</p></div>}

                        <button className={styles.btn_green}>Отправить</button>
                    </Form>
                )}
            </Formik>
            <div className={styles.text}>
                <button className={styles.green}>Не получил(-а) код</button>
            </div>
            <div className={styles.text}>
                <button className={styles.btn_gray} onClick={()=> onFormSwitch('authPartners')}>Вход для партнеров</button>
            </div>
        </div>
    )

}