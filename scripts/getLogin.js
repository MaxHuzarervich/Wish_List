import {API_URL} from "./const.js";


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