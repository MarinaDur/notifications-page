import styled, { css } from "styled-components";
import Paragraph from "../ui/Paragraph";
import Span from "../ui/Span";
import Image from "../ui/Image";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  background: ${(props) =>
    props.$isNotRead
      ? "var(--color-very-light-grayish-blue)"
      : "var(--color-white)"};
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  ${(props) =>
    props.$row &&
    css`
      gap: 1rem;
    `}

  ${(props) =>
    props.$column &&
    css`
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
    `}
`;

const StyledConForP = styled.div`
  padding: 12px;
  border: 1px solid var(--color-light-grayish-blue-2);
  margin-top: 10px;
  border-radius: 5px;

  &:hover {
    background: var(--color-light-grayish-blue-1);
  }
`;

function Notification({ value, isNotRead, onClick }) {
  const { userImage, userName, action, post, group, message, image, when } =
    value;
  return (
    <StyledContainer onClick={onClick} $isNotRead={isNotRead}>
      <StyledDiv $row="row">
        <Image src={userImage} alt="profile-img"></Image>
        <StyledDiv $column="column">
          <Paragraph>
            <Span $name="name">{userName} </Span>
            <Span $action="action">{action} </Span>
            {post && <Span $post="post">{post} </Span>}
            {group && <Span $group="group">{group}</Span>}
            {isNotRead && <Span $redCircle="redCircle"></Span>}
          </Paragraph>
          <Paragraph $time="time">{when}</Paragraph>
          {message && (
            <StyledConForP>
              <Paragraph>{message}</Paragraph>
            </StyledConForP>
          )}
        </StyledDiv>
      </StyledDiv>
      {image && <Image src={image} alt="profile-img"></Image>}
    </StyledContainer>
  );
}

export default Notification;
