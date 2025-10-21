import { useTheme } from '../theme/ThemeProvider'
import imgLeft from '../assets/landing/see1.png'
import imgRight from '../assets/landing/see2.png'
import logo from '../assets/landing/logo.png'
import logo2 from '../assets/landing/logo (1).png'
import ElectricBorder from '../components/ElectricBorder'

function Badge() {
  return (
    <div className="mx-auto mb-3 flex items-center justify-center gap-2 text-green-600">
      <span className="inline-block h-1.5 w-1.5 rotate-45 rounded-[2px] bg-green-600" />
      <span className="text-xs font-semibold tracking-widest">COMMUNITY</span>
    </div>
  )
}

// Removed unused PillIcon to satisfy TS6133

export default function CommunityShowcase() {
  const { isDark } = useTheme()

  return (
    <section className={`w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 space-y-10 sm:space-y-14">
        {/* Header */}
        <div>
          <Badge />
          <h2 className={`text-center font-bold font-syne tracking-tight ${isDark ? 'text-white' : 'text-gray-900'} text-3xl sm:text-4xl md:text-5xl`}>
            Join our community today
          </h2>
          <p className={`mx-auto mt-3 max-w-3xl text-center text-sm sm:text-base ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Discover stories, milestones, and real results from our journey. Watch how our work is driving change,
            creating opportunities, and communities.
          </p>
        </div>

        {/* Row 1: image left, text right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <ElectricBorder color={isDark ? '#16a34a' : '#16a34a'} thickness={2} className="rounded-2xl" style={{ borderRadius: '1rem' }}>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img src={imgLeft} alt="Community activity" className="" />
              </div>
            </ElectricBorder>
          </div>
          <div>
            <img src={logo} alt="" />
            <h3 className={`font-syne text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>NodeBridge Africa</h3>
            <p className={`mt-2 text-sm sm:text-base ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              NodeBridge is a decentralized learning and innovation hub focused on empowering Africa, node by node. We
              are building a network of forward-thinking developers, students, and entrepreneurs passionate about
              unlocking the power of Web3 across the continent.
            </p>
          </div>
        </div>

        {/* Row 2: text left, image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
           <img src={logo2} alt="" />
            <h3 className={`font-syne text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Web3 Protocol Africa</h3>
            <p className={`mt-2 text-sm sm:text-base ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Web3 Protocol Africa is a community dedicated to hands-on learning and collaboration in blockchain
              protocol design — exploring consensus, execution, cryptography, and scalability through workshops,
              research, and open-source projects.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <ElectricBorder color={isDark ? '#16a34a' : '#16a34a'} thickness={2} className="rounded-2xl" style={{ borderRadius: '1rem' }}>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img src={imgRight} alt="Community learning session" className="" />
              </div>
            </ElectricBorder>
          </div>
        </div>
      </div>
    </section>
  )
}
