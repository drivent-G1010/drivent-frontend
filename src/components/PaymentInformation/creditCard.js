import React from 'react';
import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export default function PaymentForm({ status }) {
  const [focus, setFocus] = useState('');
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  return (
    <CreditCardBox id="PaymentForm" status={status === false ? 'none' : 'flex'}>
      <Cards cvc={cvc} expiry={expiry} focused={focus} name={name} number={number} />
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
          <p>E.g.: 49..., 51..., 36..., 37...</p>
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
        </form>
      </InputsCreditCard>
    </CreditCardBox>
  );
}

const CreditCardBox = styled.div`
  display: flex;
  display: ${props => props.status};
  font-family: 'Roboto', sans-serif;
`;

const InputsCreditCard = styled.div`
  width: 100%;
  margin-left: 40px;
  margin-right: 10%;
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
`;
