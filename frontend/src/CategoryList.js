import React, {Component} from "react";
import ConnectToApi from "./ConnectToApi";

const connectToApi = new ConnectToApi();

class CategoryList extends Component {


    constructor(props) {
        super(props);

        this.state = {
            category: []
        };
    }

    componentDidMount() {
        var self = this;
        connectToApi.getMainCategory().then(function (result) {
            console.log(result);
            self.setState({category: result.objects});
        });
    }

    render() {




        return (
            <div className="team-grid">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Дом вашей мечты</h2>
                        <p className="text-center">Категории наших услуг</p>
                    </div>

                    <div className="row people">
                        {this.state.category.map(a =>
                            <div className="col-md-4 col-lg-3 item" key={a.id}>
                                <div className="box"
                                     data-string={a.title}
                                     onClick={() => window.open("/SubCategory", "_self")}>
                                    <img src={"logo512.png"}/>
                                    <div className="cover">
                                        <h3 className="name">{a.title}</h3>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>


                </div>
            </div>
        );
    }

}

export default CategoryList;