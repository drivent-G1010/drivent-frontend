import { useState } from 'react';
import NoEnrollment from '../../../components/Dashboard/NoEnrollment';
import TicketTypes from '../../../components/Dashboard/Payment';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const [presencial, setPresencial] = useState(false);
  const [online, setOnline] = useState(false);
  const { enrollment } = useEnrollment();

  return enrollment ? (
    <TicketTypes presencial={presencial} setPresencial={setPresencial} online={online} setOnline={setOnline} />
  ) : (
    <NoEnrollment />
  );
}
