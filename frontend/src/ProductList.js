import React, {Component} from 'react';
import ConnectToApi from './ConnectToApi';
import LinesEllipsis from 'react-lines-ellipsis'

const connectToApi = new ConnectToApi();
const API_URL = 'http://127.0.0.1:8000';

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: []
        };
    }

    componentDidMount() {
        var self = this;
        connectToApi.getConnectToApi().then(function (result) {
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
                             onClick={() => window.open("/MorePage", "_self")}>
                            <div className="card-body p-4">
                                <img src={"http://127.0.0.1:8000" + c.images} alt="Responsive image"
                                     className="img-fluid d-block mx-auto mb-3"/>
                                <h5><a className="text-dark">{c.title}</a></h5>

                                <LinesEllipsis
                                    className="small text-muted font-italic"
                                    text={c.description}
                                    maxLine={5}
                                    ellipsis='...'
                                    trimRight
                                    basedOn='words'
                                />


                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

}

export default ProductList;