import Room from './Room';
import styled from 'styled-components';

export function Hotels({ accommodation, setAccommodation, hotels }) {
  return (
    <Container hide={accommodation.room ? 'true' : 'false'}>
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
      {accommodation.hotelId ? (
        <Room hotels={hotels} accommodation={accommodation} setAccommodation={setAccommodation} />
      ) : (
        ''
      )}
    </Container>
  );
}

const Container = styled.div`
  display: ${(props) => (props.hide === 'true' ? 'none' : 'initial')};
`;

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
  margin: 15px 20px 0 0;
  padding: 15px;
  border: ${(props) => (props.clicked === 'true' ? '1px solid #000000' : '1px solid #cecece')};
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.clicked === 'true' ? '#feeed2' : '#ebebeb')};
  :hover {
    border: 1px solid ${(props) => (props.clicked === 'true' ? '#000000' : '#a6a6a6')};
    background-color: ${(props) => (props.clicked === 'true' ? '#feeed2' : '#cccccc')};
  }
  img {
    width: 168px;
    height: 109px;
    margin: 0 auto 10px auto;
    border-radius: 5px;
    object-fit: cover;
  }
  h3 {
    color: #343434;
    font-size: 20px;
  }
  h4,
  p {
    color: #3c3c3c;
    font-size: 12px;
    line-height: 16px;
  }
  h4 {
    margin-top: 10px;
    font-weight: 700;
  }
`;
