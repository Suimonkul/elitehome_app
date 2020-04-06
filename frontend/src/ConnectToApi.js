import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

export default class ConnectToApi {

	constructor() {
	}

	getConnectToApi() {
		console.log("get product");
		const url = `${API_URL}/api/v1/product/`;
		return axios.get(url).then(response => response.data);
	}

	getConnectToApiByURL(link) {
		const url = `${API_URL}${link}`;
		return axios.get(url).then(response => response.data);
	}
}