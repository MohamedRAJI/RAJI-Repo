import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListProductsComponent from "./components/ListProductsComponent";
import React from "react";
import FooterComponent from "./components/FooterComponent";
import CreateProductComponent from "./components/CreateProductComponent";
import ProductDetailsComponent from "./components/ProductDetailsComponent";
import SideBarComponent from "./components/SideBarComponent";
import FormTestComponent from "./components/FormTestComponent";

function App() {
  return (
    <div>
        <Router>
                    <div className="container">
                        <Switch>
                            <Route path="/:bank/products" component={ListProductsComponent}></Route>
                            <Route path="/:bank/Add-product" component={FormTestComponent}></Route>
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
