import React from 'react'
import { GiIceCube,
    GiGinkgoLeaf,
    GiJigsawBox,
    GiHeatHaze, 
    GiIBeam, 
    GiMountaintop, 
    GiNestedHexagons,
    GiSpottedMushroom,
    GiStoneSphere,
    GiWoodBeam
  } from "react-icons/gi";
import { IconContext } from 'react-icons';

export default function Footer() {
  return (
    <footer className='py-3' style={{background: "black"}}>
      <p style={{color: "white", marginLeft: "5vw"}}>
      <IconContext.Provider value={{style: {color: "white", fontSize: "30px", marginRight: '3vw'}}}>
        <GiIBeam/>
        <GiNestedHexagons/>
      </IconContext.Provider>
        {" "} Michael ~ T ~ O'Dell</p>
    </footer>
  )
}
