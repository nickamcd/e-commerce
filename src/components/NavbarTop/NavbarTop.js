import { 
  Container,
  Navbar, 
  Button, 
  Badge,
} from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { GiCoffeePot } from 'react-icons/gi'
import { useHistory, useLocation } from 'react-router-dom' 
import './NavbarTop.css'

const NavbarTop = ({ totalItems }) => {
  /* 
    use useHistory hook to add link
    to bootstrap-react button
  */
  const history = useHistory()

  /* 
    use useLocation hook for conditional
    displaying of elements
  */
  const location = useLocation()

  function handleClick(path) {
    history.push(path)
  }

  return (
    <>
      <Navbar bg="secondary" variant="dark" fixed="top">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand className="brand" title="Home" onClick={ () => handleClick("") } >
            <GiCoffeePot />
            <span>The Hot Pot</span>
          </Navbar.Brand>
          { location.pathname === '/' && (
            <Button variant="outline-info" title="Checkout" onClick={ () => handleClick("cart") } >
              <FaShoppingCart /> <Badge>{ totalItems }</Badge>
            </Button>
          ) }
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarTop
