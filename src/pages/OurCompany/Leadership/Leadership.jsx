import React from 'react'
import LeaderboardHero from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import Section5 from './Section5/Section5'

const Leadership = () => {
  return (  
    <>
      <LeaderboardHero/>
      <div className='max-w-screen-xl mx-auto'>
        <Section2/>
        <Section3/>
        <Section4/>
      </div>
        <Section5/>
    </>
  )
}

export default Leadership
