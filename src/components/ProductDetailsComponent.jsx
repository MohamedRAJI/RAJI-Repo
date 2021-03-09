import React, {Component} from 'react';
import ProductService from "../services/ProductService";
import SideBarComponent from "./SideBarComponent";

class ProductDetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            designation: '',
            prix: '', quantite: ''
        }
    }
    componentDidMount() {
            ProductService.getProductById(this.state.id).then((res) => {
                let product = res.data;
                this.setState({
                    designation: product.designation,
                    prix: product.prix,
                    quantite: product.quantite
                });
            });
    }
    goBack(){
        this.props.history.push('/products');
    }
    render() {
        return (
            <div>
                <br/>
                <div className="card">
                    <div className="card-header"><h3>Product Page</h3></div>
                    <div className="card-body">
                        <h6>Id: {this.state.id}</h6>
                        <h6>Designation: {this.state.designation}</h6>
                        <h6>Prix: {this.state.prix}</h6>
                        <h6>Quantité: {this.state.quantite}</h6>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-info" onClick={this.goBack.bind(this)}>Back</button>
                    </div>
                </div>
            </div>
        );
    }
}


export default ProductDetailsComponent;
