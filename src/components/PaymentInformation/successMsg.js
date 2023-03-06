import { BsFillCheckCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

export default function SuccessMessage({ status }) {
  return (
    <StyleMessage ok={status === false ? 'none' : 'flex'}>
      <BsFillCheckCircleFill className="check" />
      <div>
        <span>Pagamento confirmado!</span>
        <p>Prossiga para escolha de hospedagem e atividades</p>
      </div>
    </StyleMessage>
  );
}

const StyleMessage = styled.div`
  display: flex;
  display: ${(props) => props.ok};
  .check {
    font-size: 40px;
    color: #36b853;
    margin-right: 14px;
  }
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #454545;

  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #454545;
  }
`;
