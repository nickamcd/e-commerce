import Product from './Product/Product'
import './Products.css'

// Dummy products
const products = [
  { id: 1, name: "Accomplish", roast: "Cinnamon", origin: "Colombia", price: "$19", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2CAAe9a7Xd3hMikB2Hp2ZQHaHa%26pid%3DApi&f=1" },
  { id: 2, name: "Courage", roast: "Light", origin: "Indonesia", price: "$14", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.X4YqVFM6KJrr9Xevl7WnYAHaFj%26pid%3DApi&f=1" },
  { id: 3, name: "Dare", roast: "Blonde", origin: "Ethiopia", price: "$17", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TLgGjzJrqB2WvSjp1_k3WwHaEB%26pid%3DApi&f=1" },
  { id: 4, name: "Listen", roast: "Medium", origin: "Brazil", price: "$19", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.lJ2lSdH0bUYeKBTLRMvnxQHaHa%26pid%3DApi&f=1" },
  { id: 5, name: "Winner", roast: "Dark", origin: "Vietnam", price: "$21", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.v6LNbfI8tHFVxZFGJGbcUQHaE8%26pid%3DApi&f=1" },
  { id: 6, name: "Perserverance", roast: "French", origin: "Cambodia", price: "$20", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6_GoZYA5IOcugn83SahvkgHaHa%26pid%3DApi&f=1" },
  { id: 7, name: "Determination", roast: "Italian", origin: "Mexico", price: "$11", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KNe7RraYwOT-CMmDLPcpugHaHa%26pid%3DApi&f=1" },
  { id: 8, name: "Gratitude", roast: "Cinnamon", origin: "Ecuador", price: "$16", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-1Nb3K3DneS7C-mMuEn6rAHaFs%26pid%3DApi&f=1" },
  { id: 9, name: "Honesty", roast: "Light", origin: "Peru", price: "$15", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5YKhmeA-QJFoOmraLPYubAHaEU%26pid%3DApi&f=1" },
  { id: 10, name: "Action", roast: "Blonde", origin: "Angola", price: "$18", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Qmj8oEk2cZR7kjA1hD1cRQHaHU%26pid%3DApi&f=1" },
  { id: 11, name: "Envision", roast: "Medium", origin: "Bolivia", price: "$22", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.41AhOQD0uErLJM1jQr6W2wHaE7%26pid%3DApi&f=1" },
  { id: 12, name: "Joy", roast: "Dark", origin: "Yemen", price: "$18", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AYPHNVc1Yf1Q3_l2umF9OgHaE8%26pid%3DApi&f=1" },
  { id: 13, name: "Inspiration", roast: "French", origin: "Kenya", price: "$19", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lLt3aZ2hqC5h7NxCVGTDUAHaHa%26pid%3DApi&f=1" },
  { id: 14, name: "Passion", roast: "Italian", origin: "Tanzania", price: "$15", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.P5ab4OAx-fFwqNu0dQdG-gHaHa%26pid%3DApi&f=1" },
  { id: 15, name: "Patience", roast: "Cinnamon", origin: "Philippines", price: "$25", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-_oGOe7FMICFh9ljdr9xewHaFe%26pid%3DApi&f=1" },
  { id: 16, name: "Wisdom", roast: "Light", origin: "Costa Rica", price: "$21", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.4DZG2sP_bJ5DT8Z2ROyx2AHaDS%26pid%3DApi&f=1" },
  { id: 17, name: "Imagination", roast: "Blonde", origin: "Panama", price: "$18", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6WUEt4rQOAQ-Xl_65c3R1AHaHa%26pid%3DApi&f=1" },
  { id: 18, name: "Hope", roast: "Medium", origin: "Jamaica", price: "$12", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4tB0Jwk286E3uUs7rFTu4QHaHa%26pid%3DApi&f=1" },
  { id: 19, name: "Fulfillment", roast: "Dark", origin: "Uganda", price: "$23", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.JfJwrWlEOxgNioUqVPfM5AHaFj%26pid%3DApi&f=1" },
  { id: 20, name: "Focus", roast: "French", origin: "Madagascar", price: "$21", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zrpkcT7tvQ9dxp2bwDxlpAHaF6%26pid%3DApi&f=1" },
  { id: 21, name: "Excellence", roast: "Italian", origin: "South Africa", price: "$12", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.n--BFWcVplBwBOMS52cAQgHaHa%26pid%3DApi&f=1"},
]

const Products = () => {
  return (
    <main className="products">
      <div>
        <h1 className="col-12">Products</h1>
      </div>
      <div className="product-grid container-fluid">
        <div className="row justify-content-evenly">
          { products.map((product) => {
            return <Product product={ product }/>
          }) }
        </div>
      </div>
    </main>
  )
}

export default Products