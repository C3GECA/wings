import React from 'react'
import './App.css'
import ComingSoon from './components/comingSoon/comingSoon'
import Timeline from './components/Timeline/timeline'
import Guest1 from './components/Animations/JetAnimation'
import CardHolder from './components/Guest/CardHolder'

import {LeftSideImage} from './components/LeftSideImage'
import treasurHunt from './images/treasureHunt.png'
import drone from './images/drone.png'
import roboRace from './images/roboRace.png'
import iif from './images/iif1.png'
import otc from './images/otc.png'
import hakathon from './images/hakathon.png'
import bgmi from './images/bgmi.png'
import valorant from './images/valorant.png'
import { RighjtSideImage } from './components/RighjtSideImage'

function App() {


  return <div className='bg-black h-full'>
    <LeftSideImage title={"DRONIC"} description={"Team will fly their Drones and complete the adventurous hurdles"} imgSrc={drone}/>
    <RighjtSideImage title={"TECHNICAL TRASURER HUNT"} description={"Team will fly their Drones and complete the adventurous hurdles"} imgSrc={treasurHunt} />
    <LeftSideImage title={"ROBO RACE"} description={"Team will fly their Drones and complete the adventurous hurdles"} imgSrc={roboRace} />
    <RighjtSideImage title={"IIF"} description={"Team will fly their Drones and complete the adventurous hurdles"} imgSrc={iif} />
    <LeftSideImage title={"ODE TO CODE"} description={"Team will fly their Drones and complete the adventurous hurdles"} imgSrc={otc} />
    <RighjtSideImage title={"HACKATHON"} description={"Team will fly their Drones and complete the adventurous hurdles"} imgSrc={hakathon} />
    <LeftSideImage title={"ESPORTS: BGMI"} description={"Team will fly their Drones and complete the adventurous hurdles"} imgSrc={bgmi} />
    <RighjtSideImage title={"ESPORTS: VALORANT"} description={"Team will fly their Drones and complete the adventurous hurdles"} imgSrc={valorant} />
  </div>
}

export default App
