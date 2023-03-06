import { useState } from 'react';
import NoEnrollment from '../../../components/Dashboard/NoEnrollment';
import OnlineConfirmation from '../../../components/Dashboard/OnlineConfirmation';
import TicketTypes from '../../../components/Dashboard/TicketTypes';
import AccommodationTypes from '../../../components/Dashboard/AccommodationTypes';

import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const [presencial, setPresencial] = useState(false);
  const [online, setOnline] = useState(false);
  const [withHotel, setWithHotel] = useState(false);
  const [withoutHotel, setWithoutHotel] = useState(false);
  const { enrollment } = useEnrollment();

  return (
    <>
      {enrollment ? (
        <TicketTypes presencial={presencial} setPresencial={setPresencial} online={online} setOnline={setOnline} />
      ) : (
        <NoEnrollment />
      )}
      {online ? <OnlineConfirmation /> : ''}
      {presencial ? <AccommodationTypes withHotel={withHotel} setWithHotel={setWithHotel} withoutHotel={withoutHotel} setWithoutHotel={setWithoutHotel}/> : ''}
      {}
    </>
  );
}
