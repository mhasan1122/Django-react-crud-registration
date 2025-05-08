import type { Registration, ApiResponse } from '../types/registration';

const API_BASE_URL = 'http://localhost:8000'; // Update with your Django server URL

export const getApiOverview = async (): Promise<ApiResponse<any>> => {
  const response = await fetch(`${API_BASE_URL}/`);
  return await response.json();
};

export const createRegistration = async (data: Omit<Registration, 'id'>): Promise<ApiResponse<Registration>> => {
  const response = await fetch(`${API_BASE_URL}/api/registration-create/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const getAllRegistrations = async (): Promise<ApiResponse<Registration[]>> => {
  const response = await fetch(`${API_BASE_URL}/api/registration-list/`);
  return await response.json();
};

export const getRegistrationById = async (id: number): Promise<ApiResponse<Registration>> => {
  const response = await fetch(`${API_BASE_URL}/api/registration-list/${id}/`);
  return await response.json();
};

export const updateRegistration = async (id: number, data: Partial<Registration>): Promise<ApiResponse<Registration>> => {
  const response = await fetch(`${API_BASE_URL}/api/registration-update/${id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const deleteRegistration = async (id: number): Promise<ApiResponse<null>> => {
  const response = await fetch(`${API_BASE_URL}/api/registration-delete/${id}/`, {
    method: 'DELETE',
  });
  return await response.json();
};