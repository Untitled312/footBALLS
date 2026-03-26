import React, {useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import useFormValidation from '../hooks/useFormValidation'

function FeedBack() {
  const [formData, setFormData] = useState({
    email: '',
    fullname: '',
    phone: '',
    message: '',
    agree: false
  })

  const { errors, validateForm } = useFormValidation()

  const handleChange = (e) => {
    const { id, type, value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm(formData)) {
      console.log('Form submitted:', formData)
      alert('Thank you for your feedback!')
      setFormData({
        email: '',
        fullname: '',
        phone: '',
        message: '',
        agree: false
      })
    } else {
      alert('Please fill in all required fields correctly')
    }
  }

  return (
    <div className="u-centered">
      <div className="c-card">
        <Header />
        <main>
          <form className="o-container o-container__form o-container--small c-card u-high" onSubmit={handleSubmit}>
            <header className="c-card__header">
              <h1 className="c-heading">
                Feedback
              </h1>
            </header>
            <div className="c-card__body">
              <div className="feedback__form">
                <label className="c-label">
                  Email:
                  <input 
                    className={`c-field c-field--label ${errors.email ? 'c-field--danger' : ''}`} 
                    type="email" 
                    id="email" 
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <small className="c-hint c-hint--danger">{errors.email}</small>}
                </label>
                
                <label className="o-form-element c-label">
                  Full name:
                  <input 
                    className={`c-field c-field--label ${errors.fullname ? 'c-field--danger' : ''}`} 
                    id="fullname" 
                    type="text"
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                  {errors.fullname && <small className="c-hint c-hint--danger">{errors.fullname}</small>}
                </label>
                
                <label className="o-form-element c-label">
                  Phone:
                  <input 
                    className={`c-field c-field--label ${errors.phone ? 'c-field--danger' : ''}`} 
                    id="phone" 
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <small className="c-hint c-hint--danger">{errors.phone}</small>}
                </label>
                
                <label className="o-form-element c-label">
                  Message:
                  <textarea 
                    className={`c-field c-field--label ${errors.message ? 'c-field--danger' : ''}`} 
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <small className="c-hint c-hint--danger">{errors.message}</small>}
                </label>
                
                <label className="c-field c-field--choice">
                  <input 
                    type="checkbox" 
                    id="agree" 
                    checked={formData.agree}
                    onChange={handleChange}
                  /> 
                  I agree to the Terms of Service
                </label>
                {errors.agree && <small className="c-hint c-hint--danger">{errors.agree}</small>}
              </div>
            </div>
            <footer className="c-card__footer">
              <button type="submit" className="c-button c-button--ghost c-button--info u-large">
                Submit
              </button>
            </footer>
          </form>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default FeedBack