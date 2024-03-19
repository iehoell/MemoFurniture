import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import Catalogue from "./components/Catalogue/Catalogue";
import ProductPage from "./components/ProductPage/ProductPage";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<MainPage />}/>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/home" element={<MainPage />}/>
                    <Route path="/catalogue" element={<Catalogue />}/>
                    <Route path="/productPage" element={<ProductPage />}/>
                    <Route path="/shoppingCart" element={<ShoppingCart />}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}
export default App;