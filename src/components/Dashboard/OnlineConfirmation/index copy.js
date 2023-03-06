import styled from 'styled-components';
import useSaveTicket from '../../../hooks/api/useSaveTicket';
import useTicketTypes from '../../../hooks/api/useTicketTypes';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import Confirmation from './Confirmation';

export default function OnlineConfirmation({ typeOfTicket }) {
  const { ticketTypes } = useTicketTypes();
  const { saveTicket } = useSaveTicket();
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    if (typeOfTicket === 'online') {
      setTicket(() => ticketTypes?.filter((t) => t.isRemote === true));
    }

    if (typeOfTicket === 'includesHotel') {
      setTicket(() => ticketTypes?.filter((t) => t.includesHotel === true));
    }

    if (typeOfTicket === 'notIncludesHotel') {
      setTicket(() => ticketTypes?.filter((t) => t.includesHotel === false));
    }
  }, [ticketTypes, ticket]);

  function createTicketOnline() {
    const data = {
      ticketTypeId: ticket[0].id,
    };

    try {
      saveTicket(data);
      toast('Ticket reservado!');
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  }

  return (
    <>
      {ticket ? (
        <>
          <Confirmation ticket={ticket[0]} />
          <Button onClick={createTicketOnline}>RESERVAR INGRESSO</Button>
        </>
      ) : (
        ''
      )}
    </>
  );
}

const Button = styled.button`
  margin-top: 17px;
  width: 170px;
  height: 37px;
  background-color: #e0e0e0;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`;
