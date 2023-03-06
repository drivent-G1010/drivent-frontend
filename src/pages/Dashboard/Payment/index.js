import { useState } from 'react';
import ConfirmPayment from '../../../components/Dashboard/ConfirmPayment';
import NoEnrollment from '../../../components/Dashboard/NoEnrollment';
import OnlineConfirmation from '../../../components/Dashboard/OnlineConfirmation';
import TicketTypes from '../../../components/Dashboard/TicketTypes';
import AccommodationTypes from '../../../components/Dashboard/AccommodationTypes';

import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const [presencial, setPresencial] = useState(false);
  const [online, setOnline] = useState(false);
  const [includesHotel, setIncludesHotel] = useState(false);
  const [notIncludesHotel, setNotIncludesHotel] = useState(false);
  const [typeOfTicket, setTypeOfTicket] = useState(''); 
  const { enrollment } = useEnrollment();

  return (
    <>
      {enrollment ? (
        <TicketTypes presencial={presencial} setPresencial={setPresencial} online={online} setOnline={setOnline} setTypeOfTicket={setTypeOfTicket} />
      ) : (
        <NoEnrollment />
      )}
      {online ? <OnlineConfirmation typeOfTicket={typeOfTicket}/> : ''}
      {presencial ? <AccommodationTypes includesHotel={includesHotel} setIncludesHotel={setIncludesHotel} notIncludesHotel={notIncludesHotel} setNotIncludesHotel={setNotIncludesHotel} typeOfTicket={typeOfTicket} setTypeOfTicket={setTypeOfTicket}/> : ''}
      {presencial && includesHotel ? <OnlineConfirmation typeOfTicket={typeOfTicket}/> : ''}
      {presencial && notIncludesHotel ? <OnlineConfirmation typeOfTicket={typeOfTicket}/> : ''}
    </>
  );
}
