import { 
  Container,
  Navbar, 
  Button, 
  Badge,
} from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { GiCoffeePot } from 'react-icons/gi'
import './NavbarTop.css'

const NavbarTop = ({ totalItems }) => {
  return (
    <>
      <Navbar bg="secondary" variant="dark" fixed="top">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#home">
            <GiCoffeePot />
            <span>The Hot Pot</span>
          </Navbar.Brand>
          <Button variant="outline-info" title="Checkout">
            <FaShoppingCart /> <Badge>{ totalItems }</Badge>
          </Button>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarTop
