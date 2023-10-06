import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.$numNotifications &&
    css`
      gap: 1rem;
      align-items: flex-start;
    `}

  ${(props) =>
    props.$header &&
    css`
      margin: 1.5rem 0 3rem;
    `}
`;

export default Container;
