import { BaseUrl, endPoints } from "./ApiEndPoints";
import { api_token } from '../utils/Globals'

const getApiService = async (url, method) => {
    console.log("url=====>", url);
    console.log("method=====>", method);

    let headers = {
        "Accept": "application/json",
        "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${api_token}`
    };

    const response = await fetch(url, {
        method: 'get',
        headers,
    });
    return await response.json();
};


export function profileApi({ method }) {
    return getApiService(BaseUrl + endPoints.profile, method);
}