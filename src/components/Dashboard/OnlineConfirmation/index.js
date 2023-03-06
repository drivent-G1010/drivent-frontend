import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useSaveTicket from '../../../hooks/api/useSaveTicket';
import useTicketTypes from '../../../hooks/api/useTicketTypes';
import { toast } from 'react-toastify';

export default function OnlineConfirmation() {
  const { ticketTypes } = useTicketTypes();
  const { saveTicket } = useSaveTicket();
  const navigate = useNavigate();

  async function createTicketOnline() {
    const ticketTypeOnline = ticketTypes.filter((t) => t.isRemote === true);

    let data = {
      ticketTypeId: ticketTypeOnline[0].id,
    };

    try {
      await saveTicket(data);
      toast('Ticket reservado!');
      navigate('/dashboard/payment/credit-card');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ConfirmationOnline>
      <p>
        Fechado! O total ficou em <span>R$ 100</span>. Agora é só confirmar:
      </p>
      <Button onClick={createTicketOnline}>RESERVAR INGRESSO</Button>
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
