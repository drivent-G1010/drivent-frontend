import { useState } from 'react';
import ConfirmPayment from '../../../components/Dashboard/ConfirmPayment';
import NoEnrollment from '../../../components/Dashboard/NoEnrollment';
import OnlineConfirmation from '../../../components/Dashboard/OnlineConfirmation';
import TicketTypes from '../../../components/Dashboard/TicketTypes';

import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const [presencial, setPresencial] = useState(false);
  const [online, setOnline] = useState(false);
  const { enrollment } = useEnrollment();

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
