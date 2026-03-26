import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Accordion from '../components/Accordion'

function Faq() {
  return (
    <div className="u-centered">
      <div className="c-card">
        <Header />
        <main>
          <div className="c-card__body">
            <Accordion />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Faq