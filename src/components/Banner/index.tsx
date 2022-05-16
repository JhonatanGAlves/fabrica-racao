import { Container } from "./styles"
import bgVideo from "../../assets/videos/background-banner-video.mp4"

export const Banner = () => {
  return (
    <Container>
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="txt-hero">
        <h1>
          JEZG com você para a<br />
          melhor performance.
        </h1>
        <h3>
          Produzimos o que há de melhor em nutrição animal para garantir a eficiência
          e produtividade dos sistemas agropecuários e aumentar a sustentabilidade do negócio.
        </h3>
      </div>
    </Container>
  )
}