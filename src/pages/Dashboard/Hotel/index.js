import { Hotels, HotelsSummary } from '../../../components/Dashboard/AccommodationSelection';

import NotIncludesHotel from '../../../components/Dashboard/NotIncludesHotel';
import PaymenteRequired from '../../../components/Dashboard/PaymentRequired';
import styled from 'styled-components';
import { useEffect } from 'react';
import useGetBooking from '../../../hooks/api/useGetBooking';
import useHotels from '../../../hooks/api/useHotels';
import { useState } from 'react';
import useTicket from '../../../hooks/api/useTicket';

export default function Hotel() {
  const [includesHotel, setIncludesHotel] = useState(undefined);
  const { getticket } = useTicket();
  const { getHotel } = useHotels();
  const { getbooking } = useGetBooking();
  const [paymentRequired, setPaymentRequired] = useState(undefined);
  const [hotels, setHotels] = useState([]);
  const [accommodation, setAccommodation] = useState({ hotelId: undefined, room: undefined });

  // eslint-disable-next-line space-before-function-paren
  useEffect(async () => {
    const ticket = await getticket();

    const resIncludesHotel = ticket.TicketType.includesHotel;
    const resStatus = ticket.status;

    setIncludesHotel(resIncludesHotel);

    if (resIncludesHotel === true && resStatus !== 'PAID') {
      setPaymentRequired(true);
    } else {
      const booking = await getbooking();

      if (booking) {
        setAccommodation({ hotelId: booking.Room.hotelId, room: booking.Room });
      }

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
      <Hotels hotels={hotels} accommodation={accommodation} setAccommodation={setAccommodation} />

      <HotelsSummary hotels={hotels} accommodation={accommodation} />
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
