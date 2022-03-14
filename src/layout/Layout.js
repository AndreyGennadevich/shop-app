import styles from './Layout.module.css';
import {Header} from "./Header/Header";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header/>
            <main className={styles.container}>
                <Outlet/>
            </main>
        </div>
    );
};
