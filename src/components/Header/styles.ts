import styled from "styled-components"

export const Container = styled.header`
  height: 6.25rem;
  border-bottom: 1px solid var(--gray-500);

  .content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 75rem;
    height: 6.25rem;
    margin: 0 auto;
    padding: 0 2rem;

    img {
      z-index: 1;
    }

    nav {
      height: 6.25rem;
      z-index: 1;

      a {
        display: inline-block;
        position: relative;
        padding: 0 0.5rem;
        height: 6.25rem;
        line-height: 6.25rem;
        text-decoration: none;
        text-transform: uppercase;

        color: var(--gray-0);

        transition: color 0.2s;

        &+a {
          margin-left: 1.5rem;
        }

        &:hover, &.active {
          color: var(--gray-0);
          font-weight: bold;

          ::after {
            content: "";
            height: 3px;
            border-radius: 3px 3px 0 0;
            width: 100%;
            position: absolute;
            bottom: 1px;
            left: 0;

            background: var(--red);
          }
        }
      }
    } 
  }
`