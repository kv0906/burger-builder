import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-project-e851c.firebaseio.com/'
});

export default instance;