import http from './http';

const API_URL = '/sendmail';

export const sendMailToUser = async(data) => {
    try {
        if(data=!null) {
            return await http.get(`${API_URL}`, {... data}); 
        }
        //return await http.get(`${API_URL}`);
    } catch (error) {
        return error.response;
    }
}

export default sendMailToUser;
