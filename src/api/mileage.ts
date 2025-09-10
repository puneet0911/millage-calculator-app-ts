import { api } from '.';

export const submitMileage = (data: { vehicle: string; km: number; fuel: number }) =>
  api.post('/mileage', data);

export const getMileage = (vehicleId: string) =>
  api.get(`/mileage?vehicle=${vehicleId}`);
