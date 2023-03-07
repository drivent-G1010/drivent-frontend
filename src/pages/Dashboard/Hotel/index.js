import { useState } from 'react';
import { useEffect } from 'react';
import NotIncludesHotel from '../../../components/Dashboard/NotIncludesHotel';
import useTicket from '../../../hooks/api/useTicket';

export default function Hotel() {
  const [includesHotel, setIncludesHotel] = useState(undefined);
  const { getticket } = useTicket();

  useEffect(async() => {
    const ticket = await getticket();

    const resincludesHotel = ticket.TicketType.includesHotel;

    setIncludesHotel(resincludesHotel);
  }, []);
  return <>{!includesHotel ? <NotIncludesHotel /> : ''}</>;
}
