import React from 'react'
import Product from '../product/Product'
import './home.css'

function Home () {
  return (
    <div className="home">
          <div className="home__container">
              <img  className="home__image"
                    src="../../images/amazon-prime.jpg" 
                    alt="" 
              />
          
              <div className="home__row"> 
                <Product
                   id="64039846"
                   title="The lean startup"
                   price={230.99}
                   image="../../images/lean-startup.png"
                   rating={5}
                />
                <Product 
                  id="98319965"
                  title="Sunny-day sandals at Shopbop"
                  price={500.49}
                  image="../../images/sunny_day.jpg"
                  rating={3}
                />
              </div>
              <div className="home__row">
                <Product 
                  id="09491685"
                  title="Deal of the Day"
                  price={150.69}
                  image="../../images/dod_deals.jpg"
                  rating={2}
                />
                <Product
                  id="72370523" 
                  title="New World by Amazon Games"
                  price={290.89}
                  image="../../images/amazon_games.jpg"
                  rating={4}               
                />
                <Product 
                  id="19225025"
                  title="Save on Renewed home and kitchen"
                  price={90.59}
                  image="../../images/kitchen.jpg"
                  rating={3}
                />
              </div>
              <div className="home__row">
                <Product
                  id="42982451" 
                  title="Bundle up with the basics"
                  price={120.00}
                  image="../../images/package_deals.jpg"
                  rating={4}
                />
              </div>
        </div>
    </div>
  )
}

export default Home