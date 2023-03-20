import Activity from './activity';
import styled from 'styled-components';

export default function Location({ locationName, activities, children, ...props }) {
  function formatTime(date) {
    const newDate = new Date(date);
    const timeString = newDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
    const time = timeString.substring(0, 5);
    return time;
  }

  function handleTime(start, end) {
    const t1 = formatTime(start);
    const t2 = formatTime(end);
    const dt1 = new Date();
    const dt2 = new Date();
    dt1.setHours(Number(t1.slice(0, 2)), Number(t1.slice(3)), 0);
    dt2.setHours(Number(t2.slice(0, 2)), Number(t2.slice(3)), 0);

    const hoursDiff = (dt2.getTime() - dt1.getTime()) / 3600000;

    return hoursDiff.toFixed(1);
  }

  return (
    <Container>
      <h2>{locationName}</h2>
      <BoxLocation className="button" {...props}>
        {activities.map((activity) => (
          <Activity
            time={handleTime(activity.startsAt, activity.endsAt)}
            name={activity.name}
            start={formatTime(activity.startsAt)}
            end={formatTime(activity.endsAt)}
            vacancies={activity.remainingVacancies}
            status={activity.remainingVacancies === 0 ? 'closed' : 'open'}
          />
        ))}
      </BoxLocation>
    </Container>
  );
}

const BoxLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 288px;
  height: 392px;
  border: 1px solid #d7d7d7;
  overflow-y: auto;

  h2 {
    color: #7b7b7b;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    font-family: 'Roboto';
    text-align: center;
  }
  span {
    padding-right: 6px;
    padding-left: 6px;
  }
`;

const Container = styled.div`
  width: 288px;
  height: 425px;
  margin-top: 31px;
  overflow: hidden;
  h2 {
    margin-bottom: 13px;
    overflow: hidden;
    color: #7b7b7b;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    font-family: 'Roboto';
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
