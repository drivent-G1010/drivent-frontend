import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import PaymentForm from './creditCard';
import { useEffect } from 'react';
import useTicket from '../../hooks/api/useTicket';

export default function PaymentInformation() {
  const { getticket } = useTicket();
  const [status, setStatus] = useState(false);
  const [ticketValue, setTicketValue] = useState('');
  const [isRemote, setIsRemote] = useState('');
  const [includesHotel, setIncludesHotel] = useState('');
  const [ticketId, setTicketId] = useState();

  useEffect(async() => {
    const ticket = await getticket();

    console.log(ticket);
    if (!ticket) {
      return;
    } else {
      setTicketValue(ticket.TicketType.price);
      setIsRemote(ticket.TicketType.isRemote);
      setIncludesHotel(ticket.TicketType.includesHotel);
      setTicketId(ticket.id);
    }

    if (ticket.status === 'PAID') {
      setStatus(true);
    }
  }, []);

  return (
    <StyledPayment>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <StyledTypography variant="h6" color="textSecondary">
        Ingresso escolhido
      </StyledTypography>
      <Box>
        <span>
          {isRemote === false ? 'Presencial' : 'Online'} {includesHotel === false ? '' : '+ Com Hotel'}
        </span>
        <p>R$ {ticketValue}</p>
      </Box>
      <StyledTypography variant="h6" color="textSecondary">
        Pagamento
      </StyledTypography>
      <PaymentForm ticketId={ticketId} status={status} setStatus={setStatus} />
    </StyledPayment>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
const StyledPayment = styled.div``;

const Box = styled.div`
  width: 290px;
  height: 108px;
  background: #ffeed2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #454545;
    margin-bottom: 8px;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #898989;
  }
`;
