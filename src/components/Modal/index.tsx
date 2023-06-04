import React, {useRef, useState} from 'react';
import styles from './index.module.sass'
import {Portal} from "../Portal";
import {useModalClose} from "../hooks/useModalClose";
import {Index} from "./Auth";
import {AuthPartners} from "./AuthPartners";
import {RegistrationWithCode} from "./RegistrationWithCode";
import {Registration} from "./Registration";
import icon from "../../assets/Union.svg"
interface Props {
    visible: boolean;
    onClose: () => void;
}

export const Modal = ({visible, onClose}: Props) => {
    const [currForm, setCurrForm] = useState<string>("auth")

    const toggleForm = (formName:string) => {
        setCurrForm(formName)
    }

    const ref = useRef<HTMLDivElement>(null)

    useModalClose(ref, () => onClose())

    return (
        <>
            {visible &&
                <Portal>
                    <div className={styles.overlay} ref={ref}>
                        <div className={styles.modal}>
                            <div className={styles.icon}>
                                <button onClick={onClose}><img src={icon} alt="icon"/></button>
                            </div>
                            <div>
                                {currForm === "auth" && <Index onFormSwitch={toggleForm}/>}
                                {currForm === "authPartners" && <AuthPartners onFormSwitch={toggleForm}/>}
                                {currForm === "registration" && <Registration onFormSwitch={toggleForm}/>}
                                {currForm === "registrationWithCode" && <RegistrationWithCode onFormSwitch={toggleForm}/>}
                            </div>
                        </div>
                    </div>
                </Portal>
            }
        </>
    )
}