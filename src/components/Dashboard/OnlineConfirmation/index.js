import styled from 'styled-components';

export default function OnlineConfirmation() {
  return (
    <ConfirmationOnline>
      <p>
        Fechado! O total ficou em <span>R$ 100</span>. Agora é só confirmar:
      </p>
      <Button>RESERVAR INGRESSO</Button>
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

const Button = styled.button`
  margin-top: 17px;
  width: 170px;
  height: 37px;
  background-color: #e0e0e0;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`;
