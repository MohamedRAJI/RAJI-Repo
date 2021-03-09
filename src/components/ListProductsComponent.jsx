import React, {Component} from 'react';
import ProductService from "../services/ProductService";
import SideBarComponent from "./SideBarComponent";
class ListProductsComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            bank:this.props.match.params.bank,
            products:[]
        }
        this.addProduct=this.addProduct.bind(this);
        this.editProduct=this.editProduct.bind(this);
        this.deleteProduct=this.deleteProduct.bind(this);
    }
    componentDidMount() {
        ProductService.getProducts(this.state.bank).then((res)=>{
           this.setState({products:res.data}) ;
        });
    }
    addProduct(){
        this.props.history.push('/add-product/-1');
    }
    editProduct(id){
        this.props.history.push(`/add-product/${id}`);
    }
    deleteProduct(id){
       ProductService.deleteProduct(id).then(res =>{
           this.setState({products:this.state.products.filter(product => product.id!==id)});
       });
    }
    showProductDetails(id){
        this.props.history.push(`/details-product/${id}`);
    }
    render() {
        return (
            <div className="fill-window">
                <SideBarComponent data={this.state.bank}/>
                <h2 className="text-center">Products List</h2>
                <div className="row">
                   <button className="btn btn-primary"  onClick={this.addProduct} >Add Product</button>
                </div><br/>
                <div className="row">
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col" className="text-center">Id</th>
                        <th scope="col" className="text-center">Designation</th>
                        <th scope="col" className="text-center">Prix</th>
                        <th scope="col" className="text-center">Quantité</th>
                        <th scope="col" className="text-center">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.products.map(
                            product=>
                                <tr key={product.id}>
                                    <th scope="row" className="text-center">{product.id}</th>
                                    <td className="text-center">{product.designation}</td>
                                    <td className="text-center">{product.prix}</td>
                                    <td className="text-center">{product.quantite}</td>
                                    <td className="text-center">
                                        <button onClick={()=>this.editProduct(product.id)} className="btn btn-info">Update</button>&nbsp;
                                        <button onClick={()=>this.deleteProduct(product.id)} className="btn btn-danger">Delete</button>&nbsp;
                                        <button onClick={()=>this.showProductDetails(product.id)} className="btn btn-success">Details</button>
                                    </td>
                                </tr>
                        )
                    }

                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

export default ListProductsComponent;
