import React from 'react'
import Head from './Head'
import Section1 from '../../components/sectionHome/Section1'
import Section2 from '../../components/sectionHome/Section2'
import Section2_card from '../../components/sectionHome/Section2_card'

const Home = () => {
  return (
    <>
      <Head />
      <Section1/>
      <Section2/>
      <Section2_card/>
    </>
  )
}

export default Home