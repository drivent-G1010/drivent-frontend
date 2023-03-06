import styled from 'styled-components';

export default function TicketTypes({ presencial, setPresencial, online, setOnline, setTypeOfTicket }) {
  function selectPresencial() {
    if (!presencial && !online) {
      setPresencial(true);
    }

    if (!presencial && online) {
      setPresencial(true);
      setOnline(false);
    }

    if (presencial && !online) {
      setPresencial(false);
    };
  }

  function selectOnline() {
    if (!presencial && !online) {
      setOnline(true);
      setTypeOfTicket('online');
    }

    if (presencial && !online) {
      setPresencial(false);
      setOnline(true);
      setTypeOfTicket('online');
    }

    if (!presencial && online) {
      setOnline(false);
    }
  }

  return (
    <>
      <DashbordaArea>
        <TitlePage>Ingresso e pagamento</TitlePage>
        <Subtitle>Primeiro, escolha sua modalidade de ingresso</Subtitle>
        <Choices>
          <Container clicked={presencial} onClick={selectPresencial}>
            <h2>Presencial</h2>
            <p>R$ 250</p>
          </Container>
          <Container clicked={online} onClick={selectOnline}>
            <h2>Online</h2>
            <p>R$ 100</p>
          </Container>
        </Choices>
      </DashbordaArea>
    </>
  );
}

const DashbordaArea = styled.div`
  font-family: 'Roboto', sans-serif;
`;

const TitlePage = styled.h1`
  font-size: 34px;
`;

const Subtitle = styled.p`
  margin-top: 35px;
  font-size: 20px;
  color: #8e8e8e;
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

  h2 {
    font-size: 16px;
    color: #454545;
  }

  p {
    font-size: 14px;
    color: #898989;
  }
`;
