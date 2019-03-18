import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5f4d3.firebaseio.com/'
});

export default instance;