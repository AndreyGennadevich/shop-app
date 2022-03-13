import styles from './Indicator.module.css';
import {useSelector} from "react-redux";

export const Indicator = () => {

    const counterItems = useSelector((state) => state.cart.counter);

    return (
            <div className={styles.indicator}>
                {counterItems}
            </div>
    );
};