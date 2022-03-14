import styles from './Header.module.css';
import {Link, useLocation} from "react-router-dom";
import {Indicator} from "../../components";
import {useSelector} from "react-redux";
import {ReactComponent as CartIcon} from "./cart.svg";
import cn from "classnames";

export const Header = () => {

    const counterItems = useSelector((state) => state.cart.counter);

    const {pathname} = useLocation();

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link
                    className={cn(styles.link, {
                        [styles.active]: pathname === '/products'
                    })}
                    to='/products'
                >Каталог</Link>
                <Link
                    className={cn(styles.link, styles.cartLink, {
                        [styles.active]: pathname === '/cart'
                    })}
                    to='/cart'
                ><CartIcon className={styles.cartIcon}/>{(counterItems > 0) && <Indicator/>}</Link>
            </div>
        </header>
    );
};