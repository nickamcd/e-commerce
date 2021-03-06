import { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import {
  HashRouter,
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
  const [order, setOrder] = useState({})

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

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()

    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
      setOrder(incomingOrder)
      refreshCart()
    } catch (err) {
      console.log(err.data.error.message)
    }
  }
  
  // use useEffect hook to fetch products on page load
  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <HashRouter>
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
          <Checkout 
            cart={ cart } 
            order={ order }
            onCaptureCheckout={ handleCaptureCheckout }
            error
          />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App
