import { getPayment } from '../../services/payment';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function usePayment() {
  const token = useToken();

  const {
    data: payment,
    loading: paymentLoading,
    error: paymentError,
    act: getpayment,
  } = useAsync((ticketId) => getPayment(ticketId, token));

  return {
    payment,
    paymentLoading,
    paymentError,
    getpayment,
  };
}
