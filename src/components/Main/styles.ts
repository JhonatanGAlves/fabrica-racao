import styled from "styled-components";

export const Container = styled.section`
  padding-bottom: 4.68rem;

  .content-main {
    max-width: 75rem;
    margin: 0 auto;
    padding: 0 2rem;

    .cards-main {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      margin-top: -6rem;

      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1.6rem 5.9rem;
        border-radius: 1rem;
        cursor: pointer;
        z-index: 1;

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        background: var(--red);

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);

          border-right: 3px solid var(--gray-800);
        }

        span {
          margin-top: 1rem;
          font-size: 1.5rem;

          color: var(--gray-0);
        }
      }
    }

    .products-main {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 6rem 2rem;

      h2 {
        font-size: 2rem;
        font-weight: 300;

        color: var(--gray-800);
      }

      .products {
        display: flex;
        justify-content: space-between;
        padding-top: 6rem;

        .product {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 14.1rem;
  
          span {
            margin-top: 1.5rem;
  
            font-family: "Exo 2", sans-serif;
            font-weight: 700;
            font-size: 1.5rem;
            text-transform: uppercase;
  
            color: var(--gray-800);
          }
        }
      }

      button {
        width: 17rem;
        padding: 1rem 1.5rem;
        margin: 6rem auto 0;
        border-radius: 0.5rem;
        border: none;

        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;

        background: var(--red);
        color: var(--gray-0);

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`

export const SectionForm = styled.section`
  display: flex;
  padding: 9.68rem 0;

  background: var(--gray-300);

  .content-form {
    display: flex;
    justify-content: space-between;

    width: 97.5rem;
    max-width: 97.5rem;
    padding-right: 1rem;

    .content-right {
      display: flex;
      flex-direction: column;

      color: var(--gray-800);

      h2 {
        font-size: 2rem;
        font-weight: 400;
      }

      p {
        margin-top: 1.5rem;

        font-size: 1.5rem;
        font-weight: 300;

        color: #929292;
      }

      form {

        .content-field {
          display: flex;
          flex-direction: column;

          font-size: 1.5rem;

          label {
            margin-top: 2rem;
            margin-bottom: 0.5rem;
          }

          input, select {
            font-size: 1.5rem;
            padding: 0.5rem 1rem;
            outline: none;

            border: 1px solid var(--gray-500);
            border-radius: 0.3rem;

            color: var(--gray-800);
            background: var(--gray-0);

            &::placeholder {
              font-size: 1.5rem;
              font-weight: 300;

              color: var(--gray-500)
            }
          }
        }

        .email-contact {
          display: inline-grid;
          grid-template-columns: auto auto;
          gap: 1rem;
        }

        button {
          width: 17rem;
          padding: 1rem 1.5rem;
          margin: 2rem auto 0;
          border-radius: 0.5rem;
          border: none;

          font-size: 1.5rem;
          font-weight: 700;
          text-transform: uppercase;

          background: var(--red);
          color: var(--gray-0);

          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.9);
          }
        }
      }
    }
  }
`