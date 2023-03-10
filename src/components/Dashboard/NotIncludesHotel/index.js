import styled from 'styled-components';

export default function NotIncludesHotel() {
  return (
    <PageNoEnrollment>
      <p>Sua modalidade de ingresso não inclui hospedagem</p>
      <p>Prossiga para a escolha de atividades</p>
    </PageNoEnrollment>
  );
}

const PageNoEnrollment = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8e8e8e;
`;
