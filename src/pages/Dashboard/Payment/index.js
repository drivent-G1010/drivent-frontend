import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoEnrollment from '../../../components/Dashboard/NoEnrollment';
import OnlineConfirmation from '../../../components/Dashboard/OnlineConfirmation';
import TicketTypes from '../../../components/Dashboard/TicketTypes';
import AccommodationTypes from '../../../components/Dashboard/AccommodationTypes';

import useEnrollment from '../../../hooks/api/useEnrollment';
import useTicket from '../../../hooks/api/useTicket';
import useTicketTypes from '../../../hooks/api/useTicketTypes';

export default function Payment() {
  const [presencial, setPresencial] = useState(false);
  const [online, setOnline] = useState(false);
  const [includesHotel, setIncludesHotel] = useState(false);
  const [notIncludesHotel, setNotIncludesHotel] = useState(false);
  const [typeOfTicket, setTypeOfTicket] = useState('');
  const { enrollment } = useEnrollment();
  const navigate = useNavigate();
  const { getticket } = useTicket();
  const { getticketTypes } = useTicketTypes();
  const [options, setOptions] = useState([]);
  const [acommodationOptions, setAcommodationOptions] = useState([]);
  const [valueWithoutHotel, setvalueWithoutHotel] = useState();

  useEffect(async() => {
    const ticket = await getticket();

    if (!ticket) {
      return;
    }

    if (ticket.status === 'PAID') {
      navigate('/dashboard/payment/credit-card');
    } else {
      navigate('/dashboard/payment/credit-card');
    }
  }, []);

  useEffect(async() => {
    const ticketTypes = await getticketTypes();
    const value = ticketTypes.filter((t) => t.isRemote === false && t.includesHotel === false)[0].price;
    setvalueWithoutHotel(value);
    setOptions(ticketTypes.filter((t) => t.includesHotel !== true));
    setAcommodationOptions(ticketTypes.filter((t) => t.isRemote === false));
  }, []);

  return (
    <>
      {enrollment ? (
        <TicketTypes
          options={options}
          presencial={presencial}
          setPresencial={setPresencial}
          online={online}
          setOnline={setOnline}
          setTypeOfTicket={setTypeOfTicket}
        />
      ) : (
        <NoEnrollment />
      )}
      {online ? <OnlineConfirmation typeOfTicket={typeOfTicket} /> : ''}
      {presencial ? (
        <AccommodationTypes
          valueWithoutHotel={valueWithoutHotel}
          acommodationOptions={acommodationOptions}
          includesHotel={includesHotel}
          setIncludesHotel={setIncludesHotel}
          notIncludesHotel={notIncludesHotel}
          setNotIncludesHotel={setNotIncludesHotel}
          typeOfTicket={typeOfTicket}
          setTypeOfTicket={setTypeOfTicket}
        />
      ) : (
        ''
      )}
      {presencial && includesHotel ? <OnlineConfirmation typeOfTicket={typeOfTicket} /> : ''}
      {presencial && notIncludesHotel ? <OnlineConfirmation typeOfTicket={typeOfTicket} /> : ''}
    </>
  );
}
