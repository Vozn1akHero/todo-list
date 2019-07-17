import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const logIn = async (login, password) => {
    return await axios.post('/auth/login', {
        login, password
    }).then(res => {
        return res.status === 200;
    }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }

        return false;
    });
};

