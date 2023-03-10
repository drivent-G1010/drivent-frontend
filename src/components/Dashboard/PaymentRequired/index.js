import styled from 'styled-components';

export default function PaymenteRequired() {
  return (
    <PagePaymenteRequired>
      <p>Você precia ter confirmado pagamento antes</p>
      <p> de fazer a escolha de hospedagem</p>
    </PagePaymenteRequired>
  );
}

const PagePaymenteRequired = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8e8e8e;
`;
