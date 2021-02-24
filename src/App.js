import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListProductsComponent from "./components/ListProductsComponent";
import HeaderComponent from "./components/HeaderComponent";
import React from "react";
import FooterComponent from "./components/FooterComponent";
import CreateProductComponent from "./components/CreateProductComponent";
import ProductDetailsComponent from "./components/ProductDetailsComponent";

function App() {
  return (
    <div>
        <Router>
                <HeaderComponent />
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={ListProductsComponent}></Route>
                            <Route path="/products" component={ListProductsComponent}></Route>
                            <Route path="/add-product/:id" component={CreateProductComponent}></Route>
                            <Route path="/details-product/:id" component={ProductDetailsComponent}></Route>
                        </Switch>
                    </div>
                <FooterComponent />
        </Router>
    </div>

  );
}

export default App;
