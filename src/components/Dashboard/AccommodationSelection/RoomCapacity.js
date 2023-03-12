import styled from 'styled-components';
import { useState } from 'react';

export default function RoomCapacity({ room, isClickable, onClick, isSelected }) {
  const [selected, setSelected] = useState(false);

  let iconArray = [];
  let grayIcons = room.capacity === room.Booking.length;

  if (grayIcons) {
    for (let j = 0; j < room.Booking.length; j++) {
      iconArray.push(<Icon key={j} color="gray"><ion-icon name="person"></ion-icon></Icon>);
    }
  } else {
    if (isSelected) {
      iconArray.push(<Icon key={0} color="pink"><ion-icon name="person"></ion-icon></Icon>);
      for (let k = 1; k < room.Booking.length; k++) {
        iconArray.push(<Icon key={k} color="black"><ion-icon name="person"></ion-icon></Icon>);
      }
      for (let j = 1; j < room.capacity - room.Booking.length; j++) {
        iconArray.push(<Icon key={j} color="black"><ion-icon name="person-outline"></ion-icon></Icon>);
      }
    } else {
      for (let j = room.Booking.length; j < room.capacity; j++) {
        iconArray.push(<Icon key={j} color="black"><ion-icon name="person-outline"></ion-icon></Icon>);
      }
      for (let k = 0; k < room.Booking.length; k++) {
        iconArray.push(<Icon key={k} color="black"><ion-icon name="person"></ion-icon></Icon>);
      }
    }
  }

  const handleClick = () => {
    if (isClickable) {
      onClick();
      setSelected(!selected);
    }
  };

  return (
    <Container onClick={handleClick} grayIcons={grayIcons} selected={selected}>
      {iconArray}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  cursor: ${(props) => (props.grayIcons ? 'default' : 'pointer')};
  opacity: ${(props) => (props.grayIcons ? '0.7' : '1')};
  pointer-events: ${(props) => (props.grayIcons ? 'none' : 'auto')};

`;

const Icon = styled.div`
  color: ${(props) => (props.color === 'gray' ? '#8C8C8C' : props.color === 'black' ? '#000' : props.color === 'pink' ? '#FF4791' : '')};
  margin-right: 3px;
`;
