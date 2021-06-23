import Product from './Product/Product'
import './Products.css'

import { 
  Container, 
  Row 
} from 'react-bootstrap'

const Products = ({ products, onAddToCart }) => {
  return (
    <main className="products">
      <Container>
        <h1 className="col-12">Products</h1>
      </Container>
      <Container fluid>
        <Row className="justify-content-evenly">
          { products.map((product) => {
            return <Product product={ product } onAddToCart={ onAddToCart } />
          }) }
        </Row>
      </Container>
    </main>
  )
}

export default Products

/*
  ß{ id: 1, name: "Accomplish", description: "Roast: Cinnamon, Country of Origin: Colombia", price: "$19", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2CAAe9a7Xd3hMikB2Hp2ZQHaHa%26pid%3DApi&f=1" },
  { id: 2, name: "Courage", description: "Roast: Light, Country of Origin: Indonesia", price: "$14", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.X4YqVFM6KJrr9Xevl7WnYAHaFj%26pid%3DApi&f=1" },
  { id: 3, name: "Dare", description: "Roast: Blonde, Country of Origin: Ethiopia", price: "$17", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TLgGjzJrqB2WvSjp1_k3WwHaEB%26pid%3DApi&f=1" },
  { id: 4, name: "Listen", description: "Roast: Medium, Country of Origin: Brazil", price: "$19", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.lJ2lSdH0bUYeKBTLRMvnxQHaHa%26pid%3DApi&f=1" },
  { id: 5, name: "Winner", description: "Roast: Dark, Country of Origin: Vietnam", price: "$21", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.v6LNbfI8tHFVxZFGJGbcUQHaE8%26pid%3DApi&f=1" },
  { id: 6, name: "Perserverance", description: "Roast: French, Country of Origin: Cambodia", price: "$20", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6_GoZYA5IOcugn83SahvkgHaHa%26pid%3DApi&f=1" },
  { id: 7, name: "Determination", description: "Roast: Italian, Country of Origin: Mexico", price: "$11", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KNe7RraYwOT-CMmDLPcpugHaHa%26pid%3DApi&f=1" },
  { id: 8, name: "Gratitude", description: "Roast: Cinnamon, Country of Origin: Ecuador", price: "$16", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-1Nb3K3DneS7C-mMuEn6rAHaFs%26pid%3DApi&f=1" },
  { id: 9, name: "Honesty", description: "Roast: Light, Country of Origin: Peru", price: "$15", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5YKhmeA-QJFoOmraLPYubAHaEU%26pid%3DApi&f=1" },
  { id: 10, name: "Action", description: "Roast: Blonde, Country of Origin: Angola", price: "$18", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Qmj8oEk2cZR7kjA1hD1cRQHaHU%26pid%3DApi&f=1" },
  { id: 11, name: "Envision", description: "Roast: Medium, Country of Origin: Bolivia", price: "$22", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.41AhOQD0uErLJM1jQr6W2wHaE7%26pid%3DApi&f=1" },
  { id: 12, name: "Joy", description: "Roast: Dark, Country of Origin: Yemen", price: "$18", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AYPHNVc1Yf1Q3_l2umF9OgHaE8%26pid%3DApi&f=1" },
  { id: 13, name: "Inspiration", description: "Roast: French, Country of Origin: Kenya", price: "$19", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lLt3aZ2hqC5h7NxCVGTDUAHaHa%26pid%3DApi&f=1" },
  { id: 14, name: "Passion", description: "Roast: Italian, Country of Origin: Tanzania", price: "$15", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.P5ab4OAx-fFwqNu0dQdG-gHaHa%26pid%3DApi&f=1" },
  { id: 15, name: "Patience", description: "Roast: Cinnamon, Country of Origin: Philippines", price: "$25", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-_oGOe7FMICFh9ljdr9xewHaFe%26pid%3DApi&f=1" },
  { id: 16, name: "Wisdom", description: "Roast: Light, Country of Origin: Costa Rica", price: "$21", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.4DZG2sP_bJ5DT8Z2ROyx2AHaDS%26pid%3DApi&f=1" },
  { id: 17, name: "Imagination", description: "Blonde, Country of Origin: Panama", price: "$18", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6WUEt4rQOAQ-Xl_65c3R1AHaHa%26pid%3DApi&f=1" },
  { id: 18, name: "Hope", description: "Roast: Medium, Country of Origin: Jamaica", price: "$12", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4tB0Jwk286E3uUs7rFTu4QHaHa%26pid%3DApi&f=1" },
  { id: 19, name: "Fulfillment", description: "Roast: Dark, Country of Origin: Uganda", price: "$23", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.JfJwrWlEOxgNioUqVPfM5AHaFj%26pid%3DApi&f=1" },
  { id: 20, name: "Focus", description: "Roast: French, Country of Origin: Madagascar", price: "$21", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zrpkcT7tvQ9dxp2bwDxlpAHaF6%26pid%3DApi&f=1" },
  { id: 21, name: "Excellence", description: "Roast: Italian, Country of Origin: South Africa", price: "$12", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.n--BFWcVplBwBOMS52cAQgHaHa%26pid%3DApi&f=1"},
*/