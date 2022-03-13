import styles from './OrderButton.module.css';
import cn from "classnames";

export const OrderButton = ({addToCart}) => {
    return (
        <button className={ cn(styles.button, 'button')} onClick={addToCart}>
            Добавить в корзину
        </button>
    );
};