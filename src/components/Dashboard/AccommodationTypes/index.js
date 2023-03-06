import styled from 'styled-components';

export default function AccommodationTypes({
  includesHotel,
  setIncludesHotel,
  notIncludesHotel,
  setNotIncludesHotel,
  typeOfTicket,
  setTypeOfTicket,
  acommodationOptions,
  valueWithoutHotel,
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

  function Option(props) {
    return (
      <Container
        clicked={props.type === 'Sem Hotel' ? notIncludesHotel : includesHotel}
        onClick={props.type === 'Sem Hotel' ? selectnotIncludesHotel : selectIncludesHotel}
      >
        <h2>{props.type}</h2>
        <p>+ R$ {props.value}</p>
      </Container>
    );
  }

  return (
    <>
      <Subtitle>Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
      <Choices>
        {acommodationOptions.map((o, i) => (
          <Option type={o.includesHotel === false ? 'Sem Hotel' : 'Com Hotel'} value={o.price - valueWithoutHotel} />
        ))}
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
