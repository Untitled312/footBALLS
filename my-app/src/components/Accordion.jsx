import React, {useEffect, useRef} from 'react'

function Accordion() {
  const accordionRef = useRef(null)

  useEffect(() => {
    import('https://unpkg.com/@blaze/atoms@x.x.x/dist/blaze-atoms/blaze-atoms.esm.js')
  }, [])

  return (
    <blaze-accordion ref={accordionRef}>
      <blaze-accordion-pane header="Who are we?">
        Professional sports professionals
      </blaze-accordion-pane>
      <blaze-accordion-pane header="Who is that guy on the main page?">
        Cristiano Ronaldo
      </blaze-accordion-pane>
      <blaze-accordion-pane header="Hotel?">
        Trivago
      </blaze-accordion-pane>
    </blaze-accordion>
  )
}

export default Accordion