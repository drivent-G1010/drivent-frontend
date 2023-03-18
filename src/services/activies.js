import api from './api';

export async function getActivitiesDays(token) {
  const response = await api.get('/activities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getActivitiesByDay(date, token) {
  const response = await api.get(
    `/activities/${date}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}

export async function joinActivity(activityId, token) {
  const response = await api.post(
    '/activities',
    { activityId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}
