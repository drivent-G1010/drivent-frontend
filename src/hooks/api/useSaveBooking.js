import { createBooking } from '../../services/booking';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useSaveBooking() {
  const token = useToken();

  const {
    data: saveBooking,
    loading: saveBookingLoading,
    error: saveBookingError,
    act: postSaveBooking,
  } = useAsync((roomId) => createBooking(roomId, token));

  return {
    saveBooking,
    saveBookingLoading,
    saveBookingError,
    postSaveBooking,
  };
}
