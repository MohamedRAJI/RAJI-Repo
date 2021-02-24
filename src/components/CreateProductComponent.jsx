import React, {Component} from 'react';
import ProductService from "../services/ProductService";

class CreateProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.match.params.id,
          designation:'',
          prix:'', quantite:''
        }
        this.changeDesignationHandler=this.changeDesignationHandler.bind(this);
        this.changePrixHandler=this.changePrixHandler.bind(this);
        this.changeQuantiteHandler=this.changeQuantiteHandler.bind(this);
        this.saveOrUpdateProduct=this.saveOrUpdateProduct.bind(this);

    }
    componentDidMount() {
        if(this.state.id==-1){
            return
        }else {
            ProductService.getProductById(this.state.id).then((res) => {
                let product = res.data;
                this.setState({
                    designation: product.designation,
                    prix: product.prix,
                    quantite: product.quantite
                });
            });
        }
    }

    saveOrUpdateProduct= (p) =>{
       p.preventDefault();
       let product={designation: this.state.designation,prix: this.state.prix,quantite: this.state.quantite};
       console.log("product==>"+ JSON.stringify(product));

        if(this.state.id==-1){
            ProductService.createProduct(product).then(res=>{
                this.props.history.push("/products");
            });
        }else {
            ProductService.updateProduct(product,this.state.id).then(res=>{
                this.props.history.push("/products");
            });
        }
    }
    changeDesignationHandler= (event)=>{
        this.setState({designation:event.target.value})
    }
    changePrixHandler= (event)=>{
        this.setState({prix:event.target.value})
    }
    changeQuantiteHandler= (event)=>{
        this.setState({quantite:event.target.value})
    }
    cancel(){
        this.props.history.push('/products');
    }
    getTitle(){
        if(this.state.id==-1){
            return <h3 className="text-center">Add Product</h3>
        }else{
            return <h3 className="text-center">Edit Product</h3>
        }
    }
    render() {
        return (
            <div><br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Designation</label>
                                        <input placeholder="Designation" name="designation" className="form-control" value={this.state.designation} onChange={this.changeDesignationHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Prix</label>
                                        <input placeholder="Prix" name="prix" className="form-control" value={this.state.prix} onChange={this.changePrixHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Quantité</label>
                                        <input placeholder="Quantité" name="quantite" className="form-control" value={this.state.quantite} onChange={this.changeQuantiteHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateProductComponent;
