import useAsync from '../useAsync';
import useToken from '../useToken';

import { CreatePayment } from '../../services/payment';

export default function useSavePayment() {
  const token = useToken();

  const {
    loading: savePaymentLoading,
    error: savePaymentError,
    act: savePayment,
  } = useAsync((data) => CreatePayment(data, token), false);

  return {
    savePaymentLoading,
    savePaymentError,
    savePayment,
  };
}
