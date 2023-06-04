import React from "react"
import classNames from "classnames"
import styles from './checkbox.module.scss'

export const Checkbox = () => {
    return (
        <div className={styles.checkbox}>
            <span>
                <p className={styles.chooseType}>Пол</p>
                <form>
                    <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Мужской
                        </label>
                    </div>
                     <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Женский
                        </label>
                    </div>
                </form>
            </span>
        </div>
    )
}

// interface ICheckboxProps {
//     className?: string
//     id: string
//     label?: string
//     isChecked?: boolean
//     onChange?: (event: React.ChangeEvent<HTMLElement> => void)
// }
//
// export const Checkbox: React.FC<ICheckboxProps> =
//     ({
//          className,
//          id,
//          label,
//          isChecked,
//          onChange
//     }) => {
//     return (
//         <label htmlFor={classNames("Checkbox", className, {
//             Checkbox_active: isChecked,
//         })} htmlFor={id}>
//             <span className={styles.checkbox_inner}>
//                 <Icon className={styles.checkbox_icon} type="Checkbox"/>
//                 <input checked={isChecked} id={id} name={label} value={label} type="checkbox" onChange={onChange}/>
//             </span>
//         </label>
//     )
// }

