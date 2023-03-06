import styled from 'styled-components';

export default function AccommodationTypes({
  includesHotel,
  setIncludesHotel,
  notIncludesHotel,
  setNotIncludesHotel,
  typeOfTicket,
  setTypeOfTicket,
}) {
  const selectIncludesHotel = () => {
    setIncludesHotel(!includesHotel);
    setNotIncludesHotel(false);
    if (typeOfTicket === 'includesHotel') {
      setTypeOfTicket('');
    } else {
      setTypeOfTicket('includesHotel');
    }
  };

  const selectnotIncludesHotel = () => {
    setNotIncludesHotel(!notIncludesHotel);
    setIncludesHotel(false);
    if (typeOfTicket === 'notIncludesHotel') {
      setTypeOfTicket('');
    } else {
      setTypeOfTicket('notIncludesHotel');
    }
  };

  return (
    <>
      <Subtitle>Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
      <Choices>
        <Container clicked={notIncludesHotel} onClick={selectnotIncludesHotel}>
          <h2>Sem Hotel</h2>
          <p>+ R$ 0</p>
        </Container>
        <Container clicked={includesHotel} onClick={selectIncludesHotel}>
          <h2>Com Hotel</h2>
          <p>+ R$ 350</p>
        </Container>
      </Choices>
    </>
  );
}

const Subtitle = styled.p`
  margin-top: 35px;
  font-size: 20px;
  color: #8e8e8e;
  font-family: Roboto, sans-serif;
`;

const Choices = styled.div`
  display: flex;
`;
const Container = styled.div`
  width: 145px;
  height: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-right: 20px;
  cursor: pointer;
  background-color: ${(props) => (props.clicked ? '#feeed2' : '#ffffff')};
  border: ${(props) => (props.clicked ? '' : '1px solid #cecece')};
  border-radius: 20px;
  font-family: Roboto, sans-serif;

  h2 {
    font-weight: 400;
    font-size: 16px;
    color: #454545;
  }

  p {
    font-size: 14px;
    color: #898989;
  }
`;
