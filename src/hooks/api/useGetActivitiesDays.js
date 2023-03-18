import { getActivitiesDays } from '../../services/activies';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useGetActivitiesDays() {
  const token = useToken();

  const {
    data: activitiesDays,
    loading: activitiesDaysLoading,
    error: activitiesDaysError,
    act: getactivitiesDays,
  } = useAsync(() => getActivitiesDays(token));

  return {
    activitiesDays,
    activitiesDaysLoading,
    activitiesDaysError,
    getactivitiesDays,
  };
}
