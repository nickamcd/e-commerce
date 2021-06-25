import { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { 
  Products, 
  NavbarTop, 
  Cart,
  Checkout 
} from './components'

import './App.css'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity)
    setCart(cart)
  }

  const handleUpdateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity })
    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId)
    setCart(cart)
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty()
    setCart(cart)
  }
  
  // use useEffect hook to fetch products on page load
  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <Router>
      <NavbarTop totalItems={ cart.total_items }/>
      <Switch>
        <Route exact path="/">
          <Products products={ products } onAddToCart={ handleAddToCart } />
        </Route>
        <Route path="/cart">
          <Cart 
            cart={ cart }
            handleUpdateCartQuantity={ handleUpdateCartQuantity }
            handleRemoveFromCart={ handleRemoveFromCart }
            handleEmptyCart={ handleEmptyCart }
          />
        </Route>
        <Route path="/checkout">
          <Checkout cart={ cart } />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
