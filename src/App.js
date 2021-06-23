import { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Products, NavbarTop } from './components'

import './App.css'

const App = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  }
  
  // use useEffect hook to fetch products on page load
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <NavbarTop />
      <Products products={ products }/>
    </>
  );
}

export default App;
