import React, {Component} from 'react';
import ConnectToApi from './ConnectToApi';
import LinesEllipsis from 'react-lines-ellipsis'
import CategoryList from "./CategoryList";

const connectToApi = new ConnectToApi();
const API_URL = connectToApi.getGeneralURL();

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: []
        };
    }

    componentDidMount() {
        var self = this;
        connectToApi.getProduct().then(function (result) {
            console.log(result);
            self.setState({product: result.objects});
        });
    }

    render() {

        return (
            <div className="row pb-5 mb-4 bg-light">
                {this.state.product.map(c =>
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" key={c.id}>
                        <div className="card rounded shadow-sm border-0"
                             onClick={() => window.open("/ProductInfo", "_self")}
                        >
                            <div className="card-body p-4">
                                <img src={API_URL + c.images} alt="Responsive image"
                                     className="img-fluid d-block mx-auto mb-3"/>
                                <h5><a className="text-dark">{c.title}</a></h5>

                                <LinesEllipsis
                                    className="small text-muted font-italic"
                                    text={c.description}
                                    maxLine="3"
                                    ellipsis='...'
                                    trimRight
                                    basedOn='letters'
                                />


                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

}

 /*<div className="content">
            <Switch>
                <Route exact path='/' component={ProductList}/>
                <Route path='/morepage' component={MorePage}/>
            </Switch>
        </div>*/

export default ProductList;