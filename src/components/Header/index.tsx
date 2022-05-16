import { Container } from "./styles"
import logo from "../../assets/images/logo-header.svg"

export const Header = () => {
  return (
    <Container>
      <div className="content-header">
        <img src={logo} alt="Logo do menu" />
        <nav>
          <a className="active" href="#">home</a>
          <a href="#">sobre nós</a>
          <a href="#">aves</a>
          <a href="#">pets</a>
          <a href="#">bovinos</a>
        </nav>
      </div>
    </Container>
  )
}