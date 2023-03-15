import styled from 'styled-components';

export default function NotIncludesHotelActivities() {
  return (
    <PagePaymenteRequired>
      <p>Sua modalidade de ingresso não necessita escolher</p>
      <p>atividade. Você terá acesso a todas as atividades.</p>
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
