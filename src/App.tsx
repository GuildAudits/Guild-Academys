import { Navbar, Hero, Bootcamps, PartnerCompanies, StandToGain, MissionVision, Achievements, CommunityShowcase, ApplyBanner, FAQ, FooterCTA } from './landpage'
import Testimonials from './landpage/Testimonials'
import { useEffect, useMemo, useState } from 'react'
import ProductDesign from './landpage/bootcamp-pages/ProductDesign'
import SmartContractAuditing from './landpage/bootcamp-pages/SmartContractAuditing'
import Web3ProtocolEngineering from './landpage/bootcamp-pages/Web3ProtocolEngineering'
import BlockchainSecurity from './landpage/bootcamp-pages/BlockchainSecurity'
import Apply from './landpage/bootcamp-pages/Apply'
import BootcampRegister from './landpage/register/BootcampRegister'

function App() {
  const [hash, setHash] = useState<string>(window.location.hash || '#/')

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#/')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const isBootcamps = hash === '#/bootcamps'
  const isRegister = hash === '#/apply'

  const bootcampSlug = useMemo(() => {
    const match = hash.match(/^#\/bootcamps\/(.+)$/)
    return match ? match[1] : null
  }, [hash])

  const BootcampDetail = useMemo(() => {
    switch (bootcampSlug) {
      case 'product-design':
        return ProductDesign
      case 'smart-contract-auditing':
        return SmartContractAuditing
      case 'web3-protocol-engineering':
        return Web3ProtocolEngineering
      case 'blockchain-security':
        return BlockchainSecurity
      default:
        return null
    }
  }, [bootcampSlug])

  return (
    <>
      <Navbar />
      <main className="pt-6 sm:pt-8 space-y-16">
        {isRegister ? (
          <>
            <BootcampRegister />
            <FooterCTA />
          </>
        ) : BootcampDetail ? (
          <>
            <BootcampDetail />
            <Achievements />
            <Apply />
            <FooterCTA />
          </>
        ) : isBootcamps ? (
          <>
            <Bootcamps />
            <Testimonials />
            <FAQ />
            <FooterCTA />
          </>
        ) : (
          <>
            <Hero />
            <PartnerCompanies />
            <StandToGain />
            <MissionVision />
            <Achievements />
            <CommunityShowcase />
            <Testimonials />
            <ApplyBanner />
            <FAQ />
            <FooterCTA />
          </>
        )}
      </main>
    </>
  )
}

export default App
