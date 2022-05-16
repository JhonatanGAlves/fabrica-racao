import { useState } from "react"
import { Container, SectionForm } from "./styles"
import iconChicken from "../../assets/images/icon-chicken.svg"
import iconCow from "../../assets/images/icon-cow.svg"
import iconPets from "../../assets/images/icon-pets.svg"
import sacoRacaoBlue from "../../assets/images/saco-racao-blue.png"
import sacoRacaoRed from "../../assets/images/saco-racao-red.png"
import imgBgForm from "../../assets/images/image-form-fabrica.png"

const cards = {
  firstCard: {
    image: {
      source: iconChicken,
      alt: "Ícone galinha"
    },
    categoria: "Aves"
  },
  secondCard: {
    image: {
      source: iconCow,
      alt: "Ícone vaca"
    },
    categoria: "Bovinos"
  },
  thirdCard: {
    image: {
      source: iconPets,
      alt: "Ícone Cão e Gato"
    },
    categoria: "Pets"
  },
}

export const Main = () => {
  return (
    <>
      <Container>
        <div className="content-main">
          <div className="cards-main">
            {Object.entries(cards).map(([key, card]) => (
              <div key={key} className="card">
                <img src={card.image.source} alt={card.image.alt} />
                <span>{card.categoria}</span>
              </div>
            ))}
          </div>
          <div className="products-main">
            <h2>Produtos com alto padrão de qualidade e <strong>máxima eficiência</strong>.</h2>
            <div className="products">
              <div className="product">
                <img src={sacoRacaoBlue} alt="Imagem saco de ração" />
                <span>
                  pc cães premium<br />
                  15kg
                </span>
              </div>
              <div className="product">
                <img src={sacoRacaoBlue} alt="Imagem saco de ração" />
                <span>
                  pc gatos premium<br />
                  10kg
                </span>
              </div>
              <div className="product">
                <img src={sacoRacaoRed} alt="Imagem saco de ração" />
                <span>
                  pc vaca<br />
                  30kg
                </span>
              </div>
              <div className="product">
                <img src={sacoRacaoBlue} alt="Imagem saco de ração" />
                <span>
                  pc galinha<br />
                  10kg
                </span>
              </div>
            </div>
            <button>
              acesse nossa loja
            </button>
          </div>
        </div>
      </Container>
      <SectionForm>
        <div className="content-form">
          <img src={imgBgForm} alt="Imagem aérea da fábrica de ração" />
          <div className="content-right">
            <h2>Vamos falar sobre o <strong>seu negócio</strong>.</h2>
            <p>
              Preencha o formulário abaixo e um de <br />
              nossos consultores técnicos entrará em <br />
              contato com você em breve.</p>
            <form className="form-group">
              <div className="content-field">
                <label htmlFor="full-name">Nome completo:</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Insira seu nome"
                />
              </div>
              <div className="email-contact">
                <div className="content-field">
                  <label htmlFor="email">E-mail:</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Insira seu e-mail"
                  />
                </div>
                <div className="content-field">
                  <label htmlFor="contact">Contato:</label>
                  <input
                    id="contact"
                    type="tel"
                    placeholder="(xx)xxxxx-xxxx"
                  />
                </div>
              </div>
              <div className="content-field">
                <label htmlFor="segment">Seguimento:</label>
                <select name="segment" id="segment">
                  <option value="">Escolha o seguimento do seu interesse</option>
                  <option value="">Aves</option>
                  <option value="">Bovinos</option>
                  <option value="">Pets</option>
                </select>
              </div>
              <button>enviar</button>
            </form>
          </div>
        </div>
      </SectionForm>
    </>
  )
}