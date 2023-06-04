import React, {useState} from "react"
import styles from './checkbox.module.scss'

export const Checkbox2 = () => {
    const [isCheckedAll, setIsCheckedAll] = useState(false);

    const [checkboxes, setCheckboxes] = useState([
        { label: 'Одежда', checked: false },
        { label: 'Обувь', checked: false },
        { label: 'Аксессуары', checked: false },
    ]);

    const handleSelectAll = () => {
        const newIsCheckedAll = !isCheckedAll;
        setIsCheckedAll(newIsCheckedAll);
        setCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((checkbox) => ({ ...checkbox, checked: newIsCheckedAll }))
        );
    }

    const handleCheckboxChange = (index:number) => {
        setCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((checkbox, i) =>
                i === index ? { ...checkbox, checked: !checkbox.checked } : checkbox
            )
        );
    };

    return (
        <div className={styles.checkbox}>
      <span>
        <p className={styles.chooseType}>Брэнд</p>
        <div className={styles.form_group}>
          <label>
            <input
                type="checkbox"
                checked={isCheckedAll}
                onChange={handleSelectAll}
                className={styles.real_checkbox}
            />
            <span className={styles.custom_checkbox}></span>
            Выбрать все
          </label>
        </div>
        <form>
          <div>
            {checkboxes.map((checkbox, index) => (
                <div className={styles.form_group} key={index}>
                    <label>
                        <input
                            type="checkbox"
                            checked={checkbox.checked}
                            onChange={() => handleCheckboxChange(index)}
                            className={styles.real_checkbox}
                        />
                        <span className={styles.custom_checkbox}></span>
                        {checkbox.label}
                    </label>
                </div>
            ))}
          </div>
        </form>
      </span>
        </div>
    )
}
