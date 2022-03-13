import styles from './CartList.module.css';
import {useEffect, useState} from "react";
import {priceRu} from "../../helpers/helpers";
import {ButtonIncDec, InputAmount, Checkout} from "../../components";
import {useSelector} from "react-redux";

export const CartList = () => {

    const [totalCost, setTotalCost] = useState(0);

    const cartItems = useSelector((state) => state.cart.items);

    useEffect(() => {
        setTotalCost(0)
        cartItems.map(p => setTotalCost(totalCost => totalCost += p.price * p.count));
    }, [cartItems]);

    return (
        <div className={styles.wrapperContainer}>
            {cartItems.length === 0 && <h1 className={styles.title}>Корзина пуста</h1>}
            {cartItems.length > 0 && <>
                <ul className={styles.cartList}>
                    {cartItems.map(i => (
                        <li key={i.id} className={styles.listItem}>
                            <img className={styles.itemImg} src={i.image} alt={i.name}/>
                            <span className={styles.itemTitle}>{i.name}</span>
                            <InputAmount value={i.count} id={i.id}/>
                            <span className={styles.itemPrice}>{priceRu(i.price * i.count)}</span>
                            <ButtonIncDec id={i.id}/>
                        </li>
                    ))}
                </ul>
                <Checkout totalCost={totalCost}/>
            </>}
        </div>
    );
};