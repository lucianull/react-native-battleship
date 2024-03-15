import axios from 'axios';

const baseUrl = 'https://malamute-enabled-yak.ngrok-free.app';

const api = axios.create({
    baseURL: baseUrl,
});

const authApi = (accessToken) => axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        "Authorization": `Bearer ${accessToken}`
    }
});

export const login = async (email, password) => {
    const result = await api.post('/auth/login', {
        email, password
    });

    return result.data;
};

export const register = async (email, password) => {
    const result = await api.post('/auth/register', {
        email, password
    });

    return result.data;
};

export const getProfileDetails = async (accessToken) => {
    const result = await authApi(accessToken).get('/user/details/me');
    return result.data;
};

export const getGames = async (accessToken) => {
    const result = await authApi(accessToken).get('/game');
    return result.data;
}