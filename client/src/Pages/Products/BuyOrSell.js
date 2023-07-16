import React from 'react'
import './BuyOrSell.css'
function BuyOrSell() {
  return (
    <div className="text-dark vw-100 min-vh-100 d-flex flex-column align-items-center">
      <div className="flex-grow-1 text-center">
        <h1>Buy And Sell All In One Place</h1>
        <p>You Can Buy And Sell Stuffs Here....Free Gifts Are Much Appreciated !!</p>
        <div className="glass-toolbar d-flex flex-wrap justify-content-center">
          <a href="/buyGoods" className="glass-button">Click To Buy Goods</a>
          <a href="/sellGoods" className="glass-button">Click To Sell Goods</a>
          <a href="https://channeli.in/auth/login?next=/feed" target="_blank" className="glass-button">Click To Go To ChannelI</a>
          <a href="https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART" target="_blank" className="glass-button">Click To Go To Flipkart</a>
          <a href="https://www.amazon.com/" target="_blank" className="glass-button">Click To Go To Amazon</a>
          <a href="https://www.ajio.com/s/jeans-3571-88891?query=:relevance" target="_blank" className="glass-button">Click To Go To AJIO</a>
          <a href="https://www.myntra.com/" target="_blank" className="glass-button">Click To Go To Myntra</a>
          <a href="https://www.adidas.co.in/" target="_blank" className="glass-button">Click To Go To Adidas Store</a>
          <a href="https://www.nike.com/jordan" target="_blank" className="glass-button">Click To Go To Nike Store</a>
        </div>
      </div>
   
    </div>
  )
}

export default BuyOrSell