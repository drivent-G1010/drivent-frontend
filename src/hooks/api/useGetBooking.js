import { getBooking } from '../../services/booking';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useGetBooking() {
  const token = useToken();

  const {
    data: booking,
    loading: getBookingLoading,
    error: getBookingError,
    act: getbooking,
  } = useAsync(() => getBooking(token));

  return {
    booking,
    getBookingLoading,
    getBookingError,
    getbooking,
  };
}
