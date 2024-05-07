import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import Catalogue from "./components/Catalogue/Catalogue";
import ProductPage from "./components/ProductPage/ProductPage";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import PlacingOrderPage from "./components/PlacingOrderPage/PlacingOrderPage";
import items from '../src/mockData/productsData';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: [items.productsData]
        }
        // this.addToOrder = this.addToOrder.bind(this)
    }
    render() {

        return (
            <div>
                <Header/>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<MainPage/>}/>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/home" element={<MainPage/>}/>
                        <Route path="/catalogue" element={<Catalogue/>}/>
                        <Route path="/productPage" element={<ProductPage/>}/>
                        <Route path="/shoppingCart" element={<ShoppingCart/>}/>
                        <Route path="/order" element={<PlacingOrderPage/>}/>
                    </Routes>
                </BrowserRouter>
                <Footer/>
            </div>
        );
    }
    // addToOrder(item){
    //     this.setState({orders: [...this.state.orders, item]})
    // }
}
export default App;