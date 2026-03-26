import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {footballer} from '../assets/images'

function Home() {
  const handleStart = () => {
    alert('under construction (no)')
  }

  const handleLogin = () => {
    alert("nah, maybe i'll do this tomorrow")
  }

  return (
    <div className="u-centered">
      <div className="c-card">
        <Header />
        <main>
          <div className="c-card__body">
            <div className="c-card__block">
              <div className="o-container o-container--xsmall">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a viverra ante, ac mattis odio. Donec mollis vestibulum sem nec luctus. Maecenas congue lectus quis mi consequat aliquet. Nullam non dolor feugiat, auctor ex non, imperdiet arcu. Fusce vestibulum dui posuere tortor mollis cursus.
              </div>
              <button 
                type="button" 
                className="c-button c-button--rounded c-button--ghost"
                onClick={handleStart}
              >
                Start
              </button>
              <button 
                type="button" 
                className="c-button c-button--rounded c-button--ghost"
                onClick={handleLogin}
              >
                Log In
              </button>
            </div>
            <img 
              alt="lamine" 
              className="o-image__body" 
              src={footballer}
            />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home