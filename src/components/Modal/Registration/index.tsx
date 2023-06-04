import React from "react";
import {Field, Form, Formik} from "formik";
import * as yup from "yup";
import styles from '../index.module.sass';

interface RegistrationProps {
    onFormSwitch: (formName: string) => void;
}
export const Registration = ({onFormSwitch}:RegistrationProps) => {
    const validationSchema = yup.object({
        phone: yup.string().required('Обязательное поле'),
        password: yup.string().required('Обязательное поле'),
    })
    return (
        <div className={styles.firstBlock}>
            <h3>Вход или регистрация</h3>
            <Formik
                initialValues={{
                    phone: ''
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
                    </Form>
                )}
            </Formik>
            <div className={styles.text}>
                <button className={styles.btn_green}>Получить код</button>
            </div>
            <div className={styles.text}>
                <button className={styles.green} onClick={()=> onFormSwitch('auth')}>Я уже зарегестрировался(-ась)</button>
            </div>

            <button className={styles.btn_gray} onClick={()=> onFormSwitch('authPartners')}>Вход для партнеров</button>
        </div>
    )

}