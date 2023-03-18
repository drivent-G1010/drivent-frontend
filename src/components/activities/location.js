import styled from 'styled-components';
import Activity from './activity';

export default function Location({ locationName, children, ...props }) {
  return (
    <Container>
      <h2>{locationName}</h2>
      <BoxLocation className="button" {...props}>
        <Activity
          time={1}
          name={'Minecraft: montando o PC ideal'}
          start={'9:00'}
          end={'10:00'}
          vacancies={27}
          status={'open'}
        />
      </BoxLocation>
    </Container>
  );
}

const BoxLocation = styled.div`
  width: 288px;
  height: 392px;
  border: 1px solid #d7d7d7;
  display: flex;
  justify-content: center;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #7b7b7b;
  }
  span {
    padding-left: 6px;
    padding-right: 6px;
  }
`;

const Container = styled.div`
  margin-top: 61px;
  width: 288px;
  height: 392px;
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #7b7b7b;
    margin-bottom: 13px;
  }
`;
