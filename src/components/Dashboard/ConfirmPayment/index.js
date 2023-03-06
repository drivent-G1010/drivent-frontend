import useTicket from '../../../hooks/api/useTicket';

export default function ConfirmPayment() {
  const { ticket } = useTicket();

  return (
    <>
      <h1>Ingresso e pagamento</h1>
      <p>Ingresso escolhido</p>
      <div>
        <p></p>
      </div>
    </>
  );
}
