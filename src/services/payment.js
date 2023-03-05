import api from './api';

export async function Payment(TicketId, cardData) {
  const response = await api.post('/payments/process', { TicketId, cardData });
  return response.data;
}