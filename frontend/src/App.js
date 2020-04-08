import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Route, Link} from 'react-router-dom'

import ProductList from './ProductList'
import './App.css';

const BaseLayout = () => (
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">DDO TEST</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
        </nav>

        <div className="content">
            <Route path="/" exact component={ProductList}/>

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