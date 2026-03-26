import React from 'react'
import {vkLogo, telegramLogo} from '../assets/images'

function Links() {
  const handleSocialClick = (platform) => {
    const urls = {
      vk: 'https://vk.com',
      telegram: 'https://t.me'
    }
    window.open(urls[platform], '_blank')
  }

  return (
    <div className="o-image__footer">
      <img 
        alt="vk_logo" 
        className="o-image__social" 
        src={vkLogo}
        onClick={() => handleSocialClick('vk')}
        style={{ cursor: 'pointer' }}
      />
      <img 
        alt="telegram_logo" 
        className="o-image__social" 
        src={telegramLogo}
        onClick={() => handleSocialClick('telegram')}
        style={{ cursor: 'pointer' }}
      />
    </div>
  )
}

export default Links