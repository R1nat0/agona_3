import { ReactNode } from 'react';
import styles from './button.module.sass';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

type ButtonProps = {
    theme?: 'GREEN16' | 'GRAY16'| 'GREEN14'| 'GRAY14' ;
    children: ReactNode;
}

export const Button = ({ theme = 'GREEN16', children}: ButtonProps) => {
    return(
        <button className={cx(styles.button, {
            buttonGreen16: theme === "GREEN16",
            buttonGreen14: theme === "GREEN14",
            buttonGray16: theme === "GRAY16",
            buttonGray14: theme === "GRAY14",

        })}>
            {children}
        </button>
    )
}