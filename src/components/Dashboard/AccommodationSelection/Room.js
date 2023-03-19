import RoomCapacity from '../AccommodationTypes/RoomCapacity';
import UserContext from '../../../contexts/UserContext';
import styled from 'styled-components';
import { useContext } from 'react';
import { useEffect } from 'react';
import useGetBooking from '../../../hooks/api/useGetBooking';
import useSavebooking from '../../../hooks/api/useSaveBooking';
import { useState } from 'react';
import usebooking from '../../../hooks/api/useBooking';

export default function Room({ accommodation, setAccommodation, hotels }) {
  const selectedHotel = hotels.find((hotel) => hotel.id === accommodation.hotelId);
  const rooms = selectedHotel?.rooms;
  const [selectedRoom, setSelectedRoom] = useState(null);
  const { postSaveBooking } = useSavebooking();
  const { putBooking } = usebooking();
  const { userData, setUserData } = useContext(UserContext);
  let bookingId = userData.booking?.id;

  const { getbooking } = useGetBooking();

  // eslint-disable-next-line space-before-function-paren
  useEffect(async () => {
    try {
      const booking = await getbooking();
      if (booking) {
        setUserData({ ...userData, booking });
      }
    } catch {
      setUserData({ ...userData, booking: undefined });
    }
  }, []);

  const handleRoomClick = (room) => {
    setSelectedRoom(room.id === selectedRoom?.id ? null : room);
  };

  async function sendBooking(roomId) {
    try {
      await postSaveBooking(roomId);
      setAccommodation({ ...accommodation, room: selectedRoom });
    } catch (err) {
      console.log(err);
    }
  }

  async function changeBooking(roomId) {
    try {
      await putBooking(bookingId, roomId);
      setUserData({ ...userData, booking: { ...userData.booking, roomId } });
      setAccommodation({ ...accommodation, room: selectedRoom });
      try {
        const booking = await getbooking();
        if (booking) {
          setUserData({ ...userData, booking });
        }
      } catch {
        setUserData({ ...userData, booking: undefined });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <h2>Ótima pedida! Agora escolha seu quarto</h2>
      <RoomBox>
        {rooms?.map((room, i) => {
          const isSelected = selectedRoom?.id === room.id;
          const isFull = room.capacity === room.Booking?.length;
          const canSelect = room.Booking?.length || 0 < room.capacity;
          return (
            <SingleRoom
              key={room.id}
              onClick={() => canSelect && handleRoomClick(room)}
              isSelected={isSelected}
              isFull={isFull}
              canSelect={canSelect}
            >
              <h3>{room.name}</h3>
              <RoomCapacity room={room} isSelected={isSelected} />
            </SingleRoom>
          );
        })}
      </RoomBox>
      <Button onClick={() => (!bookingId ? sendBooking(selectedRoom.id) : changeBooking(selectedRoom.id))}>
        RESERVAR QUARTO
      </Button>
    </Container>
  );
}

const Container = styled.div``;

const RoomBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 29px 50px 0 0;
`;

const SingleRoom = styled.div`
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  border-radius: 10px;
  margin: 4px 17px 4px 0;
  padding: 0 16px;
  cursor: ${({ canSelect }) => (canSelect ? 'pointer' : 'not-allowed')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isSelected, isFull }) => (isSelected ? '#FFEED2' : isFull ? '#E9E9E9' : '#ffffff')};

  h3 {
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    color: ${({ isSelected, isFull }) => (isSelected || isFull ? '#333333' : '#666666')};
  }
`;

const Button = styled.button`
  width: 182px;
  height: 37px;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  margin-top: 40px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  :hover {
    transform: scale(1.03);
  }
`;
