import { getHotels } from '../../services/hotelApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useHotels() {
  const token = useToken();

  const { data: hotels, loading: hotelsLoading, error: hotelsError, act: getHotel } = useAsync(() => getHotels(token));

  return {
    hotels,
    hotelsLoading,
    hotelsError,
    getHotel,
  };
}
