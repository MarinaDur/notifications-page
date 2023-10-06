import styled, { css } from "styled-components";

const Paragraph = styled.p`
  font-size: 1.3rem;
  color: var(--color-dark-grayish-blue);

  ${(props) =>
    props.name &&
    css`
      color: var(--color-very-dark-blue);
      font-weight: 800;
      cursor: pointer;
    `}

  ${(props) =>
    props.time &&
    css`
      color: var(--color-grayish-blue);
    `}

    ${(props) =>
    props.$allRead &&
    css`
      cursor: pointer;
      &:hover {
        color: var(--color-blue);
      }
    `}
`;

export default Paragraph;
