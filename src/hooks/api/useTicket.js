import { getTicket } from '../../services/ticketApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useTicket() {
  const token = useToken();

  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: getticket,
  } = useAsync(() => getTicket(token));

  return {
    ticket,
    ticketLoading,
    ticketError,
    getticket,

  };
}
