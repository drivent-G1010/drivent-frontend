import NotIncludesHotel from '../../../components/Dashboard/NotIncludesHotel';
import PaymenteRequired from '../../../components/Dashboard/PaymentRequired';
import styled from 'styled-components';
import { useEffect } from 'react';
import useHotels from '../../../hooks/api/useHotels';
import { useState } from 'react';
import useTicket from '../../../hooks/api/useTicket';

export default function Hotel() {
  const [includesHotel, setIncludesHotel] = useState(undefined);
  const { getticket } = useTicket();
  const { getHotel } = useHotels();
  const [paymentRequired, setPaymentRequired] = useState(undefined);
  const [hotels, setHotels] = useState([]);
  const [accommodation, setAccommodation] = useState({ hotelId: '', roomId: '' });

  // eslint-disable-next-line space-before-function-paren
  useEffect(async () => {
    const ticket = await getticket();

    const resIncludesHotel = ticket.TicketType.includesHotel;
    const resStatus = ticket.status;

    setIncludesHotel(resIncludesHotel);

    if (resIncludesHotel === true && resStatus !== 'PAID') {
      setPaymentRequired(true);
    } else {
      const hotelList = await getHotel();

      if (!hotelList) return;

      const hotelsWithTotalCapacity = hotelList.map((hotel) => ({
        id: hotel.id,
        name: hotel.name,
        image: hotel.image,
        totalCapacity: hotel.Rooms.reduce((total, room) => total + room.capacity, 0),
        singles: hotel.Rooms.some((room) => room.capacity === 1),
        doubles: hotel.Rooms.some((room) => room.capacity === 2),
        triples: hotel.Rooms.some((room) => room.capacity === 3),
        rooms: hotel.Rooms,
      }));

      setHotels(hotelsWithTotalCapacity);
    }
  }, [accommodation]);

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
        {hotels.map((hotel) => {
          return (
            <SingleHotel
              key={hotel.id}
              id={hotel.id}
              onClick={() => setAccommodation({ ...accommodation, hotelId: hotel.id })}
              clicked={accommodation.hotelId === hotel.id ? 'true' : 'false'}
            >
              <img src={hotel.image} alt="HotelImg" />
              <h3>{hotel.name}</h3>
              <h4>Tipos de acomodação:</h4>
              <p>
                {hotel.singles && 'Singles'}
                {hotel.singles && (hotel.doubles || hotel.triples) && ' | '}
                {hotel.doubles && 'Doubles'}
                {hotel.doubles && hotel.triples && ' | '}
                {hotel.triples && 'Triples'}
              </p>
              <h4>Vagas disponíveis:</h4>
              <p>{hotel.totalCapacity}</p>
            </SingleHotel>
          );
        })}
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
`;

const SingleHotel = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 196px;
  height: 264px;
  padding: 15px;
  margin: 15px 20px 0 0;
  border: ${(props) => (props.clicked === 'true' ? '' : '1px solid #cecece')};
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.clicked === 'true' ? '#feeed2' : '#ebebeb')};

  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
    object-fit: cover;
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
`;
