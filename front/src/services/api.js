// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Cambia esto a la URL de tu backend

export const addCancha = async (cancha) => {
  return await axios.post(`${API_URL}/cancha`, cancha);
};

export const getCancha = async () => {
  return await axios.get(`${API_URL}/cancha`);
};

export const addHorario = async (horario) => {
  return await axios.post(`${API_URL}/horarios`, horario);
};

export const getHorarios = async () => {
  return await axios.get(`${API_URL}/horarios`);
};

export const createReservation = async (reservation) => {
  return await axios.post(`${API_URL}/reservations`, reservation);
};
