import React from 'react'
import Gmap from '../../components/Gmap/Gmap'
import ContactUs from '../../components/Contact/Contact'
import ContactForm from '../../components/Contact/ContactForm'
import Divisional_Office from '../../components/Contact/Divisional_Office'

const Contact = () => {
  return (
    <>
      <Gmap/>
      <ContactUs/>
      <Divisional_Office/>
      {/* <ContactForm/> */}
    </>
  )
}

export default Contact
