import {useState} from 'react'

function useFormValidation() {
  const [errors, setErrors] = useState({})

  const validateForm = (formData) => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.fullname) {
      newErrors.fullname = 'Full name is required'
    } else if (formData.fullname.length < 2) {
      newErrors.fullname = 'Name must be at least 2 characters'
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\+][\d\(\)\ -]{4,14}\d$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.message) {
      newErrors.message = 'Message is required'
    }

    if (!formData.agree) {
      newErrors.agree = 'You must agree to the Terms of Service'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return {errors, validateForm}
}

export default useFormValidation