import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoEnrollment from '../../../components/Dashboard/NoEnrollment';
import OnlineConfirmation from '../../../components/Dashboard/OnlineConfirmation';
import TicketTypes from '../../../components/Dashboard/TicketTypes';

import useEnrollment from '../../../hooks/api/useEnrollment';
import useTicket from '../../../hooks/api/useTicket';

export default function Payment() {
  const [presencial, setPresencial] = useState(false);
  const [online, setOnline] = useState(false);
  const { enrollment } = useEnrollment();
  const navigate = useNavigate();
  const { getticket } = useTicket();

  useEffect(async() => {
    const ticket = await getticket();
    if (ticket.status === 'PAID') {
      navigate('/dashboard/payment/credit-card');
    }
  }, []);

  return (
    <>
      {enrollment ? (
        <TicketTypes presencial={presencial} setPresencial={setPresencial} online={online} setOnline={setOnline} />
      ) : (
        <NoEnrollment />
      )}
      {online ? <OnlineConfirmation /> : ''}
    </>
  );
}
