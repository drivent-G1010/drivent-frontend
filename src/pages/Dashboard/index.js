import DashboardLayout from '../../layouts/Dashboard';
import EventInfoContext from '../../contexts/EventInfoContext';
import NavigationBar from '../../components/Dashboard/NavigationBar';
import { Outlet } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import styled from 'styled-components';
import { useContext } from 'react';
import { useEffect } from 'react';
import useGetBooking from '../../hooks/api/useGetBooking';

export default function Dashboard() {
  const { eventInfo } = useContext(EventInfoContext);
  const { userData, setUserData } = useContext(UserContext);
  const { getbooking } = useGetBooking();

  // eslint-disable-next-line space-before-function-paren
  useEffect(async () => {
    const booking = await getbooking();
    if (booking) {
      setUserData({ ...userData, booking });
    }
  }, []);

  return (
    <DashboardLayout background={eventInfo.backgroundImageUrl}>
      <NavigationBar />

      <Container>
        <Outlet />
      </Container>
    </DashboardLayout>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
