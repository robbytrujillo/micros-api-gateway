const axios = requiere("axios");

const { TIMEOUT } = process.env;

module.exports = (baseUrl) => {
    return axios.create({
        baseURL: baseUrl,
        timeout: TIMEOUT
    });
}