import styled from "styled-components"

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  margin-top: -6.25rem;

  video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
  }

  .txt-hero {
    position: fixed;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    min-width: 100%;
    min-height: 100%;
    
    color: var(--gray-0);
    background: rgba(0, 0, 0, 0.5);

    h1 {
      font-size: 5rem;
    }

    h3 {
      margin-top: 1rem;
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`