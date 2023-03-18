import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import NotIncludesHotelActivities from '../../../components/Dashboard/NotIncludesHotel/activities';
import PaymenteRequiredActivities from '../../../components/Dashboard/PaymentRequired/activities';
import useTicket from '../../../hooks/api/useTicket';
import Typography from '@material-ui/core/Typography';
import Day from '../../../components/activities/day';
import Location from '../../../components/activities/location';

export default function Activities() {
  const [includesHotel, setIncludesHotel] = useState(undefined);
  const { getticket } = useTicket();
  const [paymentRequired, setPaymentRequired] = useState(undefined);

  useEffect(async() => {
    try {
      const ticket = await getticket();
      const resIncludesHotel = ticket.TicketType.includesHotel;
      const resStatus = ticket.status;

      setIncludesHotel(resIncludesHotel);

      if (resStatus !== 'PAID') {
        setPaymentRequired(true);
      }
    } catch {
      setPaymentRequired(true);
    }
  }, []);

  if (paymentRequired) {
    return <PaymenteRequiredActivities />;
  }

  if (!includesHotel) {
    return <NotIncludesHotelActivities />;
  }

  return (
    <Container>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      <StyledTypography variant="h6" color="textSecondary">
        Primeiro, filtre pelo dia do evento:
      </StyledTypography>
      <Day>Sexta, 22/10</Day>
      <Day>Sexta, 22/10</Day>
      <Day>Sexta, 22/10</Day>
      <div className="locations">
        <Location locationName={'Auditório Principal'}></Location>
        <Location locationName={'Auditório Principal 2'}></Location>
        <Location locationName={'Auditório Principal 3'}></Location>
      </div>
    </Container>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const Container = styled.div`
  width: 100%;
  .locations {
    width: 864px;
    display: flex;
    flex-wrap: wrap;
  }
`;
