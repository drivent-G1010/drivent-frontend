import styled from 'styled-components';

export default function Confirmation({ ticket }) {
  return (
    <ConfirmationOnline>
      <p>
        Fechado! O total ficou em
        <span>R$ {/* {ticket ? ticket.price : '-'} */}</span>. Agora é só confirmar:
      </p>
    </ConfirmationOnline>
  );
}

const ConfirmationOnline = styled.div`
  margin-top: 45px;
  font-family: 'Roboto', sans-serif;
  color: #8e8e8e;

  p {
    font-size: 20px;
  }

  span {
    font-weight: 700;
  }
`;
