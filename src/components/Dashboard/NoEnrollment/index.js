import styled from 'styled-components';

export default function NoEnrollment() {
  return (
    <PageNoEnrollment>
      <p>Você precisa completar sua insrição antes</p>
      <p> de prosseguir pra escolha de ingresso</p>
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
