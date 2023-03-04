import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import React, { useState } from 'react';
import PaymentForm from './creditCard';
import SuccessMessage from './successMsg';

dayjs.extend(CustomParseFormat);

export default function PaymentInformation() {
  const [status, setStatus] = useState(false);

  return (
    <StyledPayment status={status !== false ? 'none' : 'initial'}>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <StyledTypography variant="h6" color="textSecondary">
        Ingresso escolhido
      </StyledTypography>
      <Box>
        <span>Presencial + Com Hotel</span>
        <p>R$ 600</p>
      </Box>
      <StyledTypography variant="h6" color="textSecondary">
        Pagamento
      </StyledTypography>
      <PaymentForm status={!status}/>
      <button onClick={() => setStatus(!status)}>FINALIZAR PAGAMENTO</button>
      <SuccessMessage status={status} />
    </StyledPayment>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
const StyledPayment = styled.div`
  button {
    display: ${(props) => props.status};
    width: 182px;
    height: 37px;
    background: #e0e0e0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: thin;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000000;
    margin-top: 40px;
    cursor: pointer;
  }
`;

const Box = styled.div`
  width: 290px;
  height: 108px;
  background: #ffeed2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #454545;
    margin-bottom: 8px;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #898989;
  }
`;
