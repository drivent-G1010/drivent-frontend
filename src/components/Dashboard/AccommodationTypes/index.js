import styled from 'styled-components';

export default function AccommodationTypes({ withHotel, setWithHotel, withoutHotel, setWithoutHotel }) {
  function selectWithHotel() {
    if (!withHotel && !withoutHotel) {
      setWithHotel(true);
    }

    if (!withHotel && withoutHotel) {
      setWithHotel(true);
      setWithoutHotel(false);
    }

    if (withHotel && !withoutHotel) {
      setWithHotel(false);
    }
  }

  function selectWithoutHotel() {
    if (!withHotel && !withoutHotel) {
      setWithoutHotel(true);
    }

    if (withHotel && !withoutHotel) {
      setWithHotel(false);
      setWithoutHotel(true);
    }

    if (!withHotel && withoutHotel) {
      setWithoutHotel(false);
    }
  }

  return (
    <>
      <Subtitle>Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
      <Choices>
        <Container clicked={withoutHotel} onClick={selectWithoutHotel}>
          <h2>Sem Hotel</h2>
          <p>+ R$ 0</p>
        </Container>
        <Container clicked={withHotel} onClick={selectWithHotel}>
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
