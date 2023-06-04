import React, { useState } from "react";
import styles from "../index.module.sass";
import {Field, Form, Formik} from "formik";
import {Button} from "../../button/Button";
import * as yup from "yup";

interface AuthProps {
 onFormSwitch: (formName: string) => void;
}
export const Index = ({onFormSwitch}:AuthProps) => {
    const validationSchema = yup.object({
        phone: yup.string().required('Обязательное поле')
            .test('phone', 'Неверный формат номера телефона', value => /^\d{10}$/.test(value)),
        password: yup.string().required('Обязательное поле')
    })
    return (
        <div className={styles.firstBlock}>
            <h3>Вход</h3>
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
                        <label htmlFor="phone"></label>
                        <Field className={styles.input1} id="phone" name="phone" placeholder="Телефон"/>
                        {errors.phone && <div className={styles.error}>{errors.phone}</div>}

                        <label htmlFor="password"></label>
                        <Field className={styles.input2} id="password" name="password" placeholder="Пароль"/>
                        {errors.password && <div className={styles.error}>{errors.password}</div>}

                        <Button theme='GREEN16'>Войти</Button>
                        {/*<button type="submit">Войти</button>*/}
                    </Form>
                )}
            </Formik>
            <div className={styles.text}>
                <button className={styles.green} onClick={() => onFormSwitch("registrationWithCode")}>Войти с помощью смс</button>
                <button className={styles.green} onClick={() => onFormSwitch("registration")}>Регистрация</button>
            </div>
            <button className={styles.btn_gray} onClick={()=> onFormSwitch('authPartners')}>Вход для партнеров</button>

        </div>
    )

}