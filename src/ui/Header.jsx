import styled from "styled-components";
import Container from "./Container";
import Paragraph from "./Paragraph";
import { useContext } from "react";
import { NotificationsContext } from "../context/NotificationContext";

const StyledH1 = styled.h1`
  font-size: 1.8rem;
  color: --color-very-dark-blue;
  font-weight: 800;
`;

const StyledNumDiv = styled.div`
  width: 30px;
  /* height: 15px;  */
  background: var(--color-blue);
  padding: 1px;
  border-radius: 5px;
`;

const StyledNumParagraph = styled.p`
  font-size: 1.4rem;
  color: var(--color-white);
  text-align: center;
`;
function Header({ onClick }) {
  const { isNotRead } = useContext(NotificationsContext);
  return (
    <Container $header="header">
      <Container $numNotifications="numNotifications">
        <StyledH1>Notifications</StyledH1>
        {isNotRead.length > 0 && (
          <StyledNumDiv>
            <StyledNumParagraph>{isNotRead.length}</StyledNumParagraph>
          </StyledNumDiv>
        )}
      </Container>
      <Paragraph onClick={onClick} $allRead="allRead">
        Mark all as read
      </Paragraph>
    </Container>
  );
}

export default Header;
