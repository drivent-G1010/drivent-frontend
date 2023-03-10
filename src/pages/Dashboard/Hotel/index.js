import NotIncludesHotel from '../../../components/Dashboard/NotIncludesHotel';
import PaymenteRequired from '../../../components/Dashboard/PaymentRequired';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
import useTicket from '../../../hooks/api/useTicket';

export default function Hotel() {
  const [includesHotel, setIncludesHotel] = useState(undefined);
  const { getticket } = useTicket();
  const [paymentRequired, setPaymentRequired] = useState(undefined);

  // eslint-disable-next-line space-before-function-paren
  useEffect(async () => {
    const ticket = await getticket();

    const resIncludesHotel = ticket.TicketType.includesHotel;
    const resStatus = ticket.status;

    setIncludesHotel(resIncludesHotel);

    if (resIncludesHotel === true && resStatus !== 'PAID') {
      setPaymentRequired(true);
    }
  }, []);

  if (!includesHotel) {
    return <NotIncludesHotel />;
  }

  if (paymentRequired) {
    return <PaymenteRequired />;
  }

  return (
    <HotelContainer>
      <h1>Escolha de hotel e quarto</h1>
      <h2>Primeiro escolha seu hotel</h2>
      <Hotels>
        <button>
          <img
            src="https://www.hotelpremiumcampinas.com.br/wp-content/uploads/2021/08/fachada-scaled.jpg"
            alt="HotelImg"
          />
          <h3>Driven Resort</h3>
          <h4>Tipos de acomodação:</h4>
          <p>Single e Double</p>
          <h4>Vagas disponíveis:</h4>
          <p>103</p>
        </button>
        <button></button>
      </Hotels>
    </HotelContainer>
  );
}

const HotelContainer = styled.div`
  font-family: 'Roboto', sans-serif;

  h1 {
    font-size: 34px;
  }
  h2 {
    margin-top: 35px;
    font-size: 20px;
    color: #8e8e8e;
  }
`;

const Hotels = styled.div`
  display: flex;
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 196px;
    height: 264px;
    padding: 15px;
    margin: 15px 20px 0 0;
    border: ${(props) => (props.clicked ? '' : '1px solid #cecece')};
    border-radius: 10px;
    cursor: pointer;
    background-color: ${(props) => (props.clicked ? '#feeed2' : '#ebebeb')};

    img {
      width: 168px;
      height: 109px;
      border-radius: 5px;
      object-fit: contain;
      margin: 0 auto 10px auto;
    }

    h3 {
      font-size: 20px;
      color: #343434;
    }

    h4,
    p {
      font-size: 12px;
      color: #3c3c3c;
      line-height: 16px;
    }

    h4 {
      margin-top: 10px;
      font-weight: 700;
    }
  }
`;
