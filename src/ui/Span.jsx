import styled, { css } from "styled-components";

const Span = styled.span`
  font-weight: 800;

  ${(props) =>
    props.$name &&
    css`
      color: var(--color-very-dark-blue);
      cursor: pointer;

      &:hover {
        color: var(--color-blue);
      }
    `}

  ${(props) =>
    props.$action &&
    css`
      font-weight: 500;
    `}

  ${(props) =>
    props.$post &&
    css`
      cursor: pointer;

      &:hover {
        color: var(--color-blue);
      }
    `}

      ${(props) =>
    props.$group &&
    css`
      cursor: pointer;

      color: var(--color-blue);
    `}

     ${(props) =>
    props.$redCircle &&
    css`
      background: var(--color-red);
      width: 7px;
      height: 7px;
      border-radius: 50%;
      display: inline-block;
      margin: 0 0 0 5px;
    `}
`;

export default Span;
