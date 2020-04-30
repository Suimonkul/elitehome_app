import React, {Component} from 'react';
import ConnectToApi from './ConnectToApi';
import LinesEllipsis from 'react-lines-ellipsis'
import CategoryList from "./CategoryList";

const connectToApi = new ConnectToApi();
const API_URL = connectToApi.getGeneralURL();

class ProductInfo extends Component {

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


            <h5><a className="text-dark">asdsajdnasdsa</a></h5>

        );
    }
}


export default ProductInfo;