import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Route, Link, Switch} from 'react-router-dom'

import ProductList from './ProductList'
import './App.css';
import './Footer-Clean.css'
import './Navigation-Clean.css'
import './Team-Grid.css'
import CategoryList from "./CategoryList";
import SubCategoryList from "./SubCategoryList";

const BaseLayout = () => (


    <div className="container-fluid">

        <nav className="navbar navbar-light navbar-expand-md navigation-clean">
            <div className="container"><a className="navbar-brand" href="#">ELITE HOME</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span
                    className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"/></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item" role="presentation"><a className="nav-link" href="#">О нас</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link" href="#">Контакты</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="content">
            <Switch>
                <Route exact path='/' component={CategoryList}/>
                <Route path='/SubCategory' component={SubCategoryList}/>
                <Route path='/Product' component={ProductList}/>
            </Switch>
        </div>

        <div className="footer-clean">
            <footer>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-4 col-md-3 item">
                            <h3>Услуги</h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 item">
                            <h3>О нас</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Legacy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 item social"><a href="#"><i
                            className="icon ion-social-facebook"/></a><a href="#"><i
                            className="icon ion-social-twitter"/></a><a href="#"><i
                            className="icon ion-social-snapchat"/></a><a href="#"><i
                            className="icon ion-social-instagram"/></a>
                            <p className="copyright">Elite Home © 2020</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
);


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <BaseLayout/>
            </BrowserRouter>
        );
    }
}

export default App;