import styled from 'styled-components';

export function Hotels({ accommodation, setAccommodation, hotels }) {
  return (
    <>
      <h2>Primeiro escolha seu hotel</h2>
      <HotelsBox>
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
      </HotelsBox>
    </>
  );
}

const HotelsBox = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  overflow-y: auto;
`;

const SingleHotel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 196px;
  height: 264px;
  padding: 15px;
  margin: 15px 20px 0 0;
  border: ${(props) => (props.clicked === 'true' ? '1px solid #000000' : '1px solid #cecece')};
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
