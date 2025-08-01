import React from 'react'
import FreightRateHero from './Hero/FreightRateHero'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'

const FreightRateCalculator = () => {
  return (
    <>
      <FreightRateHero/>
      <div className='max-w-screen-xl mx-auto'>
        <Section1/>
      </div>
        <Section2/>
    </>
  )
}

export default FreightRateCalculator
