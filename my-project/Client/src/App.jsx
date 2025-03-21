import React from 'react'
// import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import PlatformFeatures from './Components/PlateformFeautures'
import CryptoSection from './Components/CryptoSection'
import SecuritySection from './Components/SecuritySection'
import WalletSection from './Components/WalletSection'

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <PlatformFeatures/>
      <CryptoSection/>
      <SecuritySection/>
      <WalletSection/>
    </div>
  )
}

export default App
