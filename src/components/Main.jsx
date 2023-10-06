import styled from "styled-components";
import AllNotifications from "./AllNotifications";
import Header from "../ui/Header";
import { useContext } from "react";
import { NotificationsContext } from "../context/NotificationContext";

const StyledMain = styled.main`
  background: var(--color-white);
  padding: 1.5rem;
  max-width: 650px;
  margin: 0 auto;
  box-shadow: 0px 0px 20px var(--color-light-grayish-blue-1);
  border-radius: 10px;

  @media (min-width: 900px) {
    padding: 1rem 2rem;
  }
`;

function Main() {
  const { handleAllMarked } = useContext(NotificationsContext);

  return (
    <StyledMain>
      <Header onClick={handleAllMarked} />
      <AllNotifications />
    </StyledMain>
  );
}

export default Main;
