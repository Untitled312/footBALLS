import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
  return (
    <div className="u-centered">
      <div className="c-card">
        <Header />
        <main>
          <div className="c-card__body__about">
            <div className="c-card__block_about">
              <div className="o-container o-container--xsmall o-container__about">
                We are professionals in our field and have been monitoring and analyzing sports events since 1863! Only verified news and absolutely accurate insides! Our experts track the progress of millions of matches every day to keep you up-to-date with all the latest news from the world of sports!
              </div>
              <h2>Have suggestions? Contact us!</h2>
              <Link to="/feedback" className="c-button c-button--rounded c-button--ghost">
                Contact us
              </Link>
            </div>
            <div style={{position: 'relative', overflow: 'hidden'}}>
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.683726%2C55.852545&mode=poi&poi%5Bpoint%5D=37.676322%2C55.851452&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D142809068136%26yclid%3D5531386181698453503&source=serp_navig&z=16.22" 
                width="560" 
                height="400"
                allowFullScreen="true" 
                style={{position: 'relative'}}
                title="Map"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default About