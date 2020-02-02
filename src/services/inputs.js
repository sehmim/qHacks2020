import axios from 'axios';

const baseURL = 'https://insurance-flask.appspot.com/postjson';
// const baseURLLocal = 'http://127.0.0.1:5000/postjson'

const postInputs = async (inputs) => {
    const response = await axios.post(baseURL, inputs);
    return response.data;
}

export default { postInputs };