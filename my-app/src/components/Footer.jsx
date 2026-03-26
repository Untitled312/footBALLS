import React from 'react'
import Links from './Links'

function Footer() {
  return (
    <>
      <div role="separator" className="c-card__item c-card__item--divider"></div>
      <footer className="c-card__footer">
        <h2 className="c-heading">
          Our social media:
        </h2>
        <Links />
      </footer>
    </>
  )
}

export default Footer