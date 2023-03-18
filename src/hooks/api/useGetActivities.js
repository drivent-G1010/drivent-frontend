import { getActivitiesByDay } from '../../services/activies';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useGetActivities() {
  const token = useToken();

  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
    act: getActivities,
  } = useAsync((date) => getActivitiesByDay(date, token));

  return {
    activities,
    activitiesLoading,
    activitiesError,
    getActivities,
  };
}
