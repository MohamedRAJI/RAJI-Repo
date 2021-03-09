import React, {Component} from 'react';
import ProductService from "../services/ProductService";

class FormTestComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            bank: this.props.match.params.bank,
            items:[]
        }

    }
    componentDidMount() {
        ProductService.getProductParams(this.state.bank).then((res)=> {
            this.setState({items: res.data});
        });
    }
    render() {
        console.log("what is in the props: "+this.props)
        console.log("what is in the items: "+this.items)
        return (
            <div><br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            FORM TEST
                            <div className="card-body">
                                <form>
                                    {this.state.items.map(
                                        item => {
                                            if (item.value === 'y') {
                                                return <div key={item.id} className="form-group">
                                                    <label>{item.libelle}</label>
                                                    <input className={this.props.className}/>
                                                </div>
                                            }
                                        }
                                    )
                                    }
                                    <button className="btn btn-success" >Save</button>
                                    <button className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormTestComponent;
