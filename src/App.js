import { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Products, NavbarTop, Cart } from './components'

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
    const item = await commerce.cart.add(productId, quantity)

    setCart(item.cart)
  }
  
  // use useEffect hook to fetch products on page load
  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  console.log(cart)

  return (
    <>
      <NavbarTop totalItems={ cart.total_items }/>
      {/* <Products products={ products } onAddToCart={ handleAddToCart } /> */}
      <Cart cart={ cart }/>
    </>
  );
}

export default App;
