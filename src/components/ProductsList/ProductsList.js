import styles from './ProductsList.module.css';
import {priceRu} from "../../helpers/helpers";
import {Loading, OrderButton} from "../../components";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {addToCart} from "../../store/cartStore";
import {useGetProductsQuery} from "../../services/ProductsService";

export const ProductsList = () => {
    const dispatch = useDispatch()

    const {data, isLoading} = useGetProductsQuery();
    const cartItems = useSelector((state) => state.cart.items);

    const checkInCart = (id) => {
          return cartItems.findIndex(p => p.id === id);
    };

    return (
        <>
            {(data?.items?.length) && <ul className={styles.productsList}>
                {data.items.map(i => (
                    <li className={styles.listItem} key={i.id}>
                        <div className={styles.imageWrapper}>
                            <img className={styles.image} src={i.image} alt={i.name}/>
                        </div>
                        <span className={styles.itemTitle}>{i.name}</span>
                        <div className={styles.priceWrapper}>
                            <span>{priceRu(i.price)}</span>
                            {checkInCart(i.id) >= 0 ? <Link className={'button'} to='/cart'>Оформить заказ</Link> : <OrderButton id={i.id} addToCart={() => dispatch(addToCart(i))}/>}
                        </div>
                    </li>
                ))}
            </ul>}
            {isLoading && <Loading/>}
        </>
    );
};