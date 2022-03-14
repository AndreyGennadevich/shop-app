import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./layout/Layout";
import {ProductsPage} from "./pages/ProductsPage/ProductsPage";
import {CartPage} from "./pages/CartPage/CartPage";
import {NotFound} from "./pages/NotFound/NotFound";


ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<Navigate to="products"/>}/>
                        <Route path='products' element={<ProductsPage/>}/>
                        <Route path='cart' element={<CartPage/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

