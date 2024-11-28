import React ,{useEffect}from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Box from '@mui/material/Box'
import bgImage from 'C:/Users/OMEN-AYAN/Desktop/wings25/src/components/Guest/bg.jpg'
import Moon from 'C:/Users/OMEN-AYAN/Desktop/wings25/src/components/Guest/moon.png'
import Mountain from 'C:/Users/OMEN-AYAN/Desktop/wings25/src/components/Guest/mountain.png'
import Road from 'C:/Users/OMEN-AYAN/Desktop/wings25/src/components/Guest/road.png'
import CardHolder from '../../Guest/CardHolder'

const Parallax = () => {
  return (
  
  <div className="max-h-screen w-full overflow-hidden">
      <Parallax pages={1.2} >
        
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'center',
          }}
        />

        
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            backgroundImage: `url(${Moon})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={1.5}
          style={{
            display: 'flex',
            padding:'5rem',
            justifyContent: 'center',
          }}
        >
          <h1
            className="text-white text-9xl font-bold pt-[180px]"
            style={{ textShadow: '0 0 10px rgba(0,0,0,0.5)' }}
          >
            GUESTS
          </h1>
        </ParallaxLayer>

        
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            backgroundImage: `url(${Mountain})`,
            backgroundSize: 'cover',
          }}
        />
        

        
        <ParallaxLayer
          offset={0}
          speed={-1.25}
          style={{
            backgroundImage: `url(${Road})`,
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer
          offset={0.42}
          speed={1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        ><CardHolder/>

        </ParallaxLayer>

        
        
      </Parallax>
    </div>
  );
};

export default Parallax;
