import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className="c-card__header">  
      <h2 className="c-heading">
        footBALLS
      </h2>
      <Link to="/" className="c-button c-button--rounded c-button--ghost">Home</Link>
      <Link to="/news" className="c-button c-button--rounded c-button--ghost">News</Link>
      <Link to="/matches" className="c-button c-button--rounded c-button--ghost">Matches</Link>
      <Link to="/faq" className="c-button c-button--rounded c-button--ghost">FAQ</Link>
      <Link to="/about" className="c-button c-button--rounded c-button--ghost">About</Link>
    </header>
  )
}

export default Header