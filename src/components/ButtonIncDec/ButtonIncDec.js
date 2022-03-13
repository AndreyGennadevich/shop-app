import styles from './ButtonIncDec.module.css';
import {ReactComponent as CloseIcon} from "./close.svg";
import {useDispatch} from "react-redux";
import {decrement, increment, removeFromCart} from "../../store/cartStore";

export const ButtonIncDec = ({id}) => {

    const dispatch = useDispatch();

    return (
        <div className={styles.btnWrapper}>
            <button className={styles.btn} onClick={() => dispatch(increment(id))}>+</button>
            <button className={styles.btn} onClick={() => dispatch(decrement(id))}>-</button>
            <button className={styles.btn} onClick={() => dispatch(removeFromCart(id))}><CloseIcon/></button>
        </div>
    );
};