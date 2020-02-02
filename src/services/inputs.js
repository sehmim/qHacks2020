import axios from 'axios';

const baseURL = 'https://insurance-flask.appspot.com/postjson';

const postInputs = async (inputs) => {
    const response = await axios.post(baseURL, inputs);
    return response.data;
}

export default { postInputs };