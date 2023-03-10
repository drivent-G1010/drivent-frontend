import 'react-credit-cards/es/styles-compiled.css';

import Cards from 'react-credit-cards';
import { DebounceInput } from 'react-debounce-input';
import React from 'react';
import SuccessMessage from './successMsg';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import useSavePayment from '../../hooks/api/useSavePayment';
import { useState } from 'react';

export default function PaymentForm({ ticketId, status, setStatus }) {
  const [focus, setFocus] = useState('');
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const { savePaymentLoading, savePayment } = useSavePayment();
  let creditCardType = require('credit-card-type');

  async function submit(event) {
    event.preventDefault();

    let cardData = {
      issuer: creditCardType(number)[0].type,
      number,
      name,
      expirationDate: expiry,
      cvv: cvc,
    };

    if (!number || !name || !expiry || !cvc) {
      toast('Para continuar preencha todos os campos!');
    } else {
      try {
        await savePayment({ ticketId: Number(ticketId), cardData });
        toast('Pagamento concluido com sucesso!');
        setStatus(true);
      } catch (error) {
        // console.log(error);
        toast('Não foi possível concluir o pagamento!');
      }
    }
  }

  return (
    <>
      <CreditCardBox id="PaymentForm" status={status !== false ? 'none' : 'flex'}>
        <Cards cvc={cvc} expiry={expiry} focused={focus} name={name} number={number} issuer={'visa'} />
        <InputsCreditCard>
          <form className="initial">
            <DebounceInput
              minLength={1}
              debounceTimeout={0}
              value={number}
              id="input-number"
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              onFocus={() => setFocus('number')}
            />
            <p>E.g.: 49..., 51..., 36..., 37... {Cards}</p>
            <input
              id="input-name"
              type="tel"
              name="name"
              placeholder="Card Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              onFocus={() => setFocus('name')}
            />
          </form>
          <form className="final">
            <input
              id="input-valid"
              type="tel"
              name="expiry"
              placeholder="Valid Thru"
              onChange={(e) => {
                setExpiry(e.target.value);
              }}
              onFocus={() => setFocus('expiry')}
            />
            <input
              id="input-cvc"
              type="tel"
              name="cvc"
              placeholder="CVC"
              onChange={(e) => {
                setCvc(e.target.value);
              }}
              onFocus={() => setFocus('cvc')}
            />
            <button onClick={submit} disabled={savePaymentLoading}>
              FINALIZAR PAGAMENTO
            </button>
          </form>
        </InputsCreditCard>
      </CreditCardBox>
      <SuccessMessage status={status} />
    </>
  );
}

const CreditCardBox = styled.div`
  display: flex;
  display: ${(props) => props.status};
  font-family: 'Roboto', sans-serif;
`;

const InputsCreditCard = styled.div`
  width: 100%;
  margin-left: 40px;
  margin-right: 10%;
  position: relative;
  input {
    padding-left: 10px;
    border-radius: 5px;
    border: solid 1.5px gray;
    font-size: 18px;
    :hover {
      border-width: 2px;
    }
  }
  p {
    color: gray;
  }
  .initial {
    display: flex;
    flex-direction: column;
  }
  #input-name {
    width: 340px;
    height: 40px;
    margin-top: 20px;
  }
  #input-number {
    width: 340px;
    height: 40px;
    margin-bottom: 5px;
  }
  #input-valid {
    width: 200px;
    height: 40px;
    margin-right: 20px;
  }
  #input-cvc {
    width: 120px;
    height: 40px;
    margin-top: 20px;
  }
  button {
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
    position: absolute;
    left: -330px;
    bottom: -90px;
  }
`;
