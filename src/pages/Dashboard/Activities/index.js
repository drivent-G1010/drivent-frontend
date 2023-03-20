/* eslint-disable space-before-function-paren */

import { useEffect, useState } from 'react';

import Day from '../../../components/activities/day';
import Location from '../../../components/activities/location';
import NotIncludesHotelActivities from '../../../components/Dashboard/NotIncludesHotel/activities';
import PaymenteRequiredActivities from '../../../components/Dashboard/PaymentRequired/activities';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import useGetActivities from '../../../hooks/api/useGetActivities';
import useGetActivitiesDays from '../../../hooks/api/useGetActivitiesDays';
import useTicket from '../../../hooks/api/useTicket';

export default function Activities() {
  const [includesHotel, setIncludesHotel] = useState(undefined);
  const { getticket } = useTicket();
  const { getactivitiesDays } = useGetActivitiesDays();
  const { getActivities } = useGetActivities();
  const [paymentRequired, setPaymentRequired] = useState(undefined);
  const [activitiesDays, setActivitiesDays] = useState([]);
  const [trails, setTrails] = useState([]);

  useEffect(async () => {
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

  useEffect(async () => {
    const days = await getactivitiesDays();
    setActivitiesDays(days);
  }, []);

  const selectDate = async (date) => {
    const trails = await getActivities(date);
    setTrails(trails);
  };

  if (paymentRequired) {
    return <PaymenteRequiredActivities />;
  }

  if (!includesHotel) {
    return <NotIncludesHotelActivities />;
  }

  function dayOfTheWeek(date) {
    const weekDay = new Date(date).getDay();

    if (weekDay === 6) {
      return 'Domingo';
    }
    if (weekDay === 0) {
      return 'Segunda';
    }
    if (weekDay === 1) {
      return 'Terça';
    }
    if (weekDay === 2) {
      return 'Quarta';
    }
    if (weekDay === 3) {
      return 'Quinta';
    }
    if (weekDay === 4) {
      return 'Sexta';
    }
    if (weekDay === 5) {
      return 'Sabado';
    }
  }

  function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' }).slice(0, 5);
  }

  return (
    <Container>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      <StyledTypography variant="h6" color="textSecondary">
        Primeiro, filtre pelo dia do evento:
      </StyledTypography>
      {activitiesDays?.map((day, i) => (
        <Day key={i} onClick={() => selectDate(day)}>
          {dayOfTheWeek(day)}, {formatDate(day)}
        </Day>
      ))}
      <div className="locations">
        {trails.map((trail) => (
          <Location key={trail.id} locationName={trail.name} activities={trail.activities}></Location>
        ))}
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
