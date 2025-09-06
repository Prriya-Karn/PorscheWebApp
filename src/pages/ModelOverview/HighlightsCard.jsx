import React, { Fragment } from 'react'
import Heading from '../../component/Heading'
import EngineCarousel from './EngineCarousel';

const HighlightsCard = () => {
  return (
    <Fragment>
    <div className='mt-30'>
        <Heading text="Driving dynamics."/>

        <div className='flex justify-center items-center max-w-2xl mx-auto px-6 py-1 rounded-lg'>
        <p className='text-center text-sm'>The Panamera models combine sporty driving dynamics and a high level of driving comfort – both in terms of longitudinal and lateral dynamics. The perfectly coordinated combination of a high-performance drivetrain, the Porsche Doppelkupplung (PDK) and the chassis ensures impressive overall performance.</p>    
        </div>

        <EngineCarousel/>
    </div>
    </Fragment>
  )
}

export default HighlightsCard;