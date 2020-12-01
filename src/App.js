import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Menu from './components/Menu'
import './App.css'

const App = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Menu />
      <main></main>
    </>
  )
}

export default App
