import React from 'react'
import {Link} from 'react-router-dom'
import {goal} from '../assets/images'

function NotFound() {
  return (
    <div className="u-centered">
      <div className="c-card__404">
        <div className="c-card__block c-card__block__404">
          <h1>404</h1>
          <div className="o-container o-container--xsmall o-container__404">
            This could have been a <strong>GOOOOAL</strong> if you had gone to an <strong>existing</strong> page
          </div>
          <Link to="/" className="c-button c-button--rounded c-button--ghost">
            Go home
          </Link>
        </div>
        <img alt="goal" className="o-image__404" src={goal} />
      </div>
    </div>
  )
}

export default NotFound