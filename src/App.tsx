import { Banner } from "./components/Banner"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { GlobalStyle } from "./styles/global"

export const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <Footer />
      <GlobalStyle />
    </>
  )
}