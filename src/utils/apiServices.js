import { BaseUrl, endPoints } from "./ApiEndPoints";
import { api_token } from '../utils/Globals'

const buildFormData = async (url, data, method) => {
    console.log("url=====>", url);
    console.log("data=====>", data);

    let headers = {
        "Accept": "application/json",
        "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${api_token}`
    };

    const response = await fetch(url, {
        method: 'post',
        headers,
        body: data
    });
    return await response.json();
};

export function loginApi({ data }) {
    return buildFormData(BaseUrl + endPoints.login, data);
}

export function registerApi({ data }) {
    return buildFormData(BaseUrl + endPoints.register, data);
}

export function verificationApi({ data }) {
    return buildFormData(BaseUrl + endPoints.verification, data);
}

export function addressproofApi({ data }) {
    return buildFormData(BaseUrl + endPoints.addressproof, data);
}

export function forgotpasswordApi({ data }) {
    return buildFormData(BaseUrl + endPoints.forgot, data);
}

export function resetpasswordApi({ data }) {
    return buildFormData(BaseUrl + endPoints.resetpassword, data);
}

export function addnewproductApi({ data }) {
    return buildFormData(BaseUrl + endPoints.addnewproduct, data);
}

export function editprofileApi({ data }) {
    return buildFormData(BaseUrl + endPoints.editprofile, data);
}
