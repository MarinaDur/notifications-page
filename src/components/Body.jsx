import styled from "styled-components";
import Main from "./Main";
import { NotificationsProvider } from "../context/NotificationContext";

const StyledBody = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--color-very-light-grayish-blue);
  margin: 0 auto;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function Body() {
  return (
    <StyledBody>
      <NotificationsProvider>
        <Main></Main>
      </NotificationsProvider>
    </StyledBody>
  );
}

export default Body;
