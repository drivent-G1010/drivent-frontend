import { joinActivity } from '../../services/activies';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useSavesaveActivities() {
  const token = useToken();

  const {
    data: saveActivities,
    loading: saveActivitiesLoading,
    error: saveActivitiesError,
    act: putActivities,
  } = useAsync((activityId) => joinActivity(activityId, token));

  return {
    saveActivities,
    saveActivitiesLoading,
    saveActivitiesError,
    putActivities,
  };
}
