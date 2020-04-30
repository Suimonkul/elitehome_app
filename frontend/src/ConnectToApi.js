import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';
const ACTIVE = '&active=true';
const FILTERING_SUBCATEGORY = '&category__title=';
const FILTERING_PRODUCT = '&subcategory__title=';

export default class ConnectToApi {

    constructor() {
    }

    getProduct() {
        const url = `${API_URL}/api/v1/product/?${ACTIVE}`;
        return axios.get(url).then(response => response.data);
    }

    getMainCategory() {
        const url = `${API_URL}/api/v1/category/?${ACTIVE}`;
        return axios.get(url).then(response => response.data)
    }

    getSubCategory() {
        const url = `${API_URL}/api/v1/subcategory/?${ACTIVE}`;
        return axios.get(url).then(response => response.data);
    }

    getGeneralURL() {
        return API_URL;
    }
}