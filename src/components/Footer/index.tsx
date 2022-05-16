import { Container } from "./styles"

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Container>
      <p>Direitos reservados ©{year} <strong>JEZG</strong></p>
      <span><a href="#">Termos de Uso</a> | <a href="#">Política de Privacidade</a></span>
    </Container>
  )
}