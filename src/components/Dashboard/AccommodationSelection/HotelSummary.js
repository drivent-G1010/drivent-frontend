/* eslint-disable indent */
import styled from 'styled-components';

export function HotelsSummary({ hotels, accommodation }) {
  const hotelInfo = hotels?.filter((hotel) => hotel.id === accommodation.hotelId);
  const { room } = accommodation;

  return (
    <SummaryBox hide={accommodation.room ? 'false' : 'true'}>
      <h2>Você já escolheu seu quarto:</h2>
      <SingleHotel>
        <img src={hotelInfo[0]?.image} alt="HotelImg" />
        <h3>{hotelInfo[0]?.name}</h3>
        <h4>Quarto reservado</h4>
        <p>
          {room?.name} ({room?.capacity === 1 ? 'Single' : room?.capacity === 2 ? 'Double' : 'Triple'})
        </p>
        <h4>Pessoas no seu quarto</h4>
        <p>{room?.Booking?.length === 0 ? 'Somente você' : `Você e mais ${room?.Booking?.length}`}</p>
      </SingleHotel>
      <button>TROCAR DE QUARTO</button>
    </SummaryBox>
  );
}

const SummaryBox = styled.div`
  display: ${(props) => (props.hide === 'true' ? 'none' : 'flex')};
  flex-direction: column;
  button {
    background-color: #e0e0e0;
    font-size: 14px;
    border-radius: 5px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border: none;
    width: 182px;
    height: 37px;
    margin-top: 38px;
    cursor: pointer;
    :hover {
      transform: scale(1.03);
    }
  }
`;

const SingleHotel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 196px;
  height: 264px;
  padding: 15px;
  margin: 15px 20px 0 0;

  border-radius: 10px;
  background-color: #feeed2;

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
