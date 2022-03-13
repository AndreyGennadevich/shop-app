import styles from './InputAmount.module.css';
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {changeAmount} from "../../store/cartStore";

export const InputAmount = ({value, id}) => {

    const [inputValue = value, setInputValue] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        if (inputValue !== value) {
            setInputValue(value);
        }
    }, [value]);

    const handleChangeInput = (event) => {
        if (event.target.value.length <= 3) {
            setInputValue(event.target.value.replace (/\D/, ''));
        }
    };

    return (
        <div className={styles.inputWrapper}>
            <input className={styles.input} type="text" value={inputValue} onChange={e => handleChangeInput(e)}/>
            <button className={styles.button} onClick={() => dispatch(changeAmount({inputValue, id}))}>Изменить</button>
        </div>
    );
};