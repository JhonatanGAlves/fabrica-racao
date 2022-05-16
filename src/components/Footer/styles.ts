import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;

  font-size: 1.5rem;
  font-weight: 300;

  background: var(--red);
  color: var(--gray-0);

  span a {
    text-decoration: none;

    color: var(--gray-0);

    &:hover {
      text-decoration: underline;
    }
  }
`