import { changeRoom } from '../../services/booking';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function usebooking() {
  const token = useToken();

  const {
    data: booking,
    loading: bookingLoading,
    error: bookingError,
    act: putBooking,
  } = useAsync((bookingId, roomId) => changeRoom(bookingId, roomId, token));

  return {
    booking,
    bookingLoading,
    bookingError,
    putBooking,
  };
}
