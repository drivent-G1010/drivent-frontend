import { useEffect } from 'react';
import { useState } from 'react';
import NotIncludesHotelActivities from '../../../components/Dashboard/NotIncludesHotel/activities';
import PaymenteRequiredActivities from '../../../components/Dashboard/PaymentRequired/activities';
import useTicket from '../../../hooks/api/useTicket';

export default function Activities() {
  const [includesHotel, setIncludesHotel] = useState(undefined);
  const { getticket } = useTicket();
  const [paymentRequired, setPaymentRequired] = useState(undefined);

  useEffect(async() => {
    try {
      const ticket = await getticket();
      const resIncludesHotel = ticket.TicketType.includesHotel;
      const resStatus = ticket.status;

      setIncludesHotel(resIncludesHotel);

      if (resStatus !== 'PAID') {
        setPaymentRequired(true);
      }
    } catch {
      setPaymentRequired(true);
    }
  }, []);

  if (paymentRequired) {
    return <PaymenteRequiredActivities />;
  }

  if (!includesHotel) {
    return <NotIncludesHotelActivities />;
  }

  return 'Atividades: Em breve!';
}
