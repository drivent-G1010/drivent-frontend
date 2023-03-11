import api from './api';

export async function changeRoom(bookingId, roomId, token) {
  const response = await api.put(
    `/booking/${bookingId}`,
    { roomId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}
