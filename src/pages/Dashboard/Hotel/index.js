import { useState } from 'react';
import { useEffect } from 'react';
import NotIncludesHotel from '../../../components/Dashboard/NotIncludesHotel';
import PaymenteRequired from '../../../components/Dashboard/PaymentRequired';
import useTicket from '../../../hooks/api/useTicket';

export default function Hotel() {
  const [includesHotel, setIncludesHotel] = useState(undefined);
  const { getticket } = useTicket();
  const [paymentRequired, setPaymentRequired] = useState(undefined);

  useEffect(async() => {
    const ticket = await getticket();

    const resIncludesHotel = ticket.TicketType.includesHotel;
    const resStatus = ticket.status;

    setIncludesHotel(resIncludesHotel);

    if (resIncludesHotel === true && resStatus !== 'PAID') {
      setPaymentRequired(true);
    }
  }, []);

  if (!includesHotel) {
    return <NotIncludesHotel />;
  }

  if (paymentRequired) {
    return <PaymenteRequired/>;
  }

  return <>Escolher Hotelzinho s2</>;
}
