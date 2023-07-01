import {API_URL, JWT_TOKEN_KEY} from "./const.js";


export const getLogin = async (token) => {
    try {
        const response = await fetch(`${API_URL}/getLogin`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        });

        return await response.json();
    } catch (e) {
        console.error(e)
    }
}

export const getUser = async (login) => {
    const token = localStorage.getItem(JWT_TOKEN_KEY);
    const headers = {
        'Content-Type': 'application/json'
    }

    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    try {
        const response = await fetch(`${API_URL}/user/${login}`, {
            method: 'GET',
            headers,
        });

        return await response.json();
    } catch (e) {
        console.error(e)
    }
};

export const sendDataUser = async (id, userData) => {
    const token = localStorage.getItem(JWT_TOKEN_KEY);
    const headers = {
        'Content-Type': 'application/json'
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    try {
        const response = await fetch(`${API_URL}/user/${id}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(userData)
        });

        return await response.json();
    } catch (e) {
        console.error(e)
    }
};

export const sendDataWish = async (wishData) => {
    const token = localStorage.getItem(JWT_TOKEN_KEY);
    const headers = {
        'Content-Type': 'application/json'
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    try {
        const response = await fetch(`${API_URL}/addWish`, {
            method: 'POST',
            headers,
            body: JSON.stringify(wishData)
        });

        return await response.json()

    } catch (e) {
        console.error(e)
    }
};

export const getWish = async (id) => {
    const token = localStorage.getItem(JWT_TOKEN_KEY);
    const headers = {
        'Content-Type': 'application/json'
    }

    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    try {
        const response = await fetch(`${API_URL}/wish/${id}`, {
            method: 'GET',
            headers,
        });

        return await response.json();
    } catch (e) {
        console.error(e)
    }
};

export const updateDataWish = async (id, wishData) => {
    const token = localStorage.getItem(JWT_TOKEN_KEY);
    const headers = {
        'Content-Type': 'application/json'
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    try {
        const response = await fetch(`${API_URL}/wish/${id}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(wishData)
        });

        return await response.json()

    } catch (e) {
        console.error(e)
    }
};

export const deleteWish = async (id) => {
    const token = localStorage.getItem(JWT_TOKEN_KEY);
    const headers = {
        'Content-Type': 'application/json'
    }

    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    try {
        const response = await fetch(`${API_URL}/wish/${id}`, {
            method: 'DELETE',
            headers,
        });

        return await response.json();
    } catch (e) {
        console.error(e)
    }
};
