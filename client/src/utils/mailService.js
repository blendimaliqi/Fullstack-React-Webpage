import http from './http';

const API_URL = '/sendmail';

export const sendMailToUser = async() => {
    try {
        return await http.get(`${API_URL}`);
    } catch (error) {
        return error.response;
    }
}

export default sendMailToUser;
