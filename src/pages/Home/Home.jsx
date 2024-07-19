import React from 'react'
import Head from './Head'
import Section1 from '../../components/sectionHome/Sections/Section1'
import Section2 from '../../components/sectionHome/Sections/Section2'
import Section2_card from '../../components/sectionHome/Sections/Section2_card'
import Section3 from '../../components/sectionHome/Benefit/Section1'
import Section4 from '../../components/sectionHome/Benefit/Section2'
import MobileApp from '../../components/sectionHome/Sections/MobileApp'
import Stat from '../../components/sectionHome/Sections/Stat'
import Testimony from '../../components/sectionHome/Sections/Testimony'
import News from '../../News/News'

const Home = () => {
  return (
    <>
      <Head />
      <Section1/>
      <Section2/>
      <Section2_card/>
      <Section3/>
      <Section4/>
      <MobileApp/>
      <Stat/>
      <Testimony/>
      <News/>
    </>
  )
}

export default Home