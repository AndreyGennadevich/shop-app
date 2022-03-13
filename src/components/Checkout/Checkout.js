import styles from './Checkout.module.css';
import {priceRu} from "../../helpers/helpers";

export const Checkout = ({totalCost}) => {
    return (
        <div className={styles.checkoutWrapper}>
            <button className={styles.button}>
                Заказать
            </button>
            Итого: <span className={styles.totalCost}>{priceRu(totalCost)}</span>
        </div>
    );
};