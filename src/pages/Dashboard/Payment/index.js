import TicketTypes from '../../../components/Dashboard/Payment';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const { enrollment } = useEnrollment();

  return enrollment ? <TicketTypes /> : '';
}
