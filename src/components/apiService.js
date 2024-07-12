import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/waste';

export const addWaste = async (waste) => {
    const response = await axios.post(`${API_BASE_URL}/add`, waste);
    return response.data;
};

export const getAllWaste = async () => {
    const response = await axios.get(`${API_BASE_URL}/list`);
    return response.data;
};

export const deleteWaste = async (id) => {
    await axios.delete(`${API_BASE_URL}/delete/${id}`);
};
