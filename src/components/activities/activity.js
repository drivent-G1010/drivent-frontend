import { IoIosCheckmarkCircleOutline, IoMdCloseCircleOutline } from 'react-icons/io';

import { RxEnter } from 'react-icons/rx';
import styled from 'styled-components';
import useSaveActivities from '../../hooks/api/useSaveActivities';

export default function Activity({ activityId, name, start, end, vacancies, onRegister, ...props }) {
  const { putActivities } = useSaveActivities();

  async function registerActivity() {
    await putActivities(activityId);
    onRegister(activityId);
  }

  return (
    <BoxActivity {...props}>
      <div className="text">
        <p>{name}</p>
        <p>{`${start} - ${end}`}</p>
      </div>
      <div className="icon-enter" onClick={registerActivity}>
        <RxEnter />
        <span>{`${vacancies} vagas`}</span>
      </div>
      <div className="icon-exit">
        <IoMdCloseCircleOutline />
        <span>Esgotado</span>
      </div>
      <div className="icon-inside">
        <IoIosCheckmarkCircleOutline />
        <span>Inscrito</span>
      </div>
    </BoxActivity>
  );
}

const BoxActivity = styled.div`
  width: 265px;
  height: ${(props) => `${79 * props.time}px`};
  background: #f1f1f1;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  .text {
    width: 199px;
    height: ${(props) => `${79 * props.time - 20}px`};
    border-right: 1px solid #cfcfcf;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-size: 12px;
    line-height: 14px;
    color: #343434;
    margin-left: 10px;
  }
  p:nth-child(1) {
    font-weight: 700;
  }

  p:nth-child(2) {
    font-weight: 400;
  }

  .icon-enter {
    display: ${(props) => (props.status === 'open' ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    margin-left: 10px;
    color: #078632;
    cursor: pointer;
    span {
      display: inline;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 9px;
      line-height: 11px;
      color: #078632;
    }
  }
  .icon-exit {
    display: ${(props) => (props.status === 'close' ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    margin-left: 10px;
    color: #cc6666;
    span {
      display: inline;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 9px;
      line-height: 11px;
      color: #cc6666;
    }
  }
  .icon-inside {
    display: ${(props) => (props.status === 'inside' ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    margin-left: 10px;
    color: #078632;
    span {
      display: inline;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 9px;
      line-height: 11px;
      color: #078632;
    }
  }
`;
