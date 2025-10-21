import { useTheme } from '../theme/ThemeProvider'
import man1 from '../assets/landing/see.png'
import man5 from '../assets/landing/see1.png'
import BlurText from '../components/BlurText'
import { motion } from 'framer-motion'
import ElectricBorder from '../components/ElectricBorder'

function Badge({ text }: { text: string }) {
  return (
    <div className="mb-3 flex items-center gap-2 text-green-600">
      <span className="inline-block h-1.5 w-1.5 rotate-45 rounded-[2px] bg-green-600" />
      <span className="text-xs font-semibold tracking-widest">{text}</span>
    </div>
  )
}

export default function MissionVision() {
  const { isDark } = useTheme()

  return (
    <section className={`w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 space-y-16">
        {/* Row 1: Image left, text right */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, mass: 0.6 }}
        >
          <div>
            <ElectricBorder color={isDark ? '#16a34a' : '#16a34a'} thickness={2} className="rounded-2xl" style={{ borderRadius: '1rem' }}>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img src={man1} alt="Guild Academy student at work" className="w-full h-auto" />
              </div>
            </ElectricBorder>
          </div>
          <div>
            <Badge text="OUR MISSION" />
            <h1 className={`font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <BlurText as="span" text="Fostering Growth" animateBy="words" /> <br />
              <BlurText as="span" text="Through Practical" animateBy="words" /> <br />
              <BlurText as="span" text="Learning and" animateBy="words" /> <br />
              <BlurText as="span" text="Mentorship" animateBy="words" />
            </h1>
            <p className={`mt-4 text-base sm:text-lg md:text-xl ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Our mission is to make technology education more accessible, secure, and relevant — especially for
              emerging communities across Africa. By fostering a supportive learning environment and partnering with
              leading industry players, Guild Academy empowers learners to gain practical experience, mentorship, and
              meaningful career opportunities in both the Web2 and Web3 spaces.
            </p>
          </div>
        </motion.div>

        {/* Row 2: Text left, image right */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, mass: 0.6 }}
        >
          <div className="order-2 md:order-1">
            <Badge text="OUR VISION" />
            <h1 className={`font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <BlurText as="span" text="Our Commitment to Inclusive and Future-Ready Learning" animateBy="words" />
            </h1>
            <p className={`mt-4 text-base sm:text-lg md:text-xl ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              To become Africa's leading hub for inclusive, secure, and future-ready tech education — transforming lives,
              unlocking global opportunities, and building a new generation of innovators, creators, and leaders across
              both Web2 and Web3 ecosystems.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <ElectricBorder color={isDark ? '#16a34a' : '#16a34a'} thickness={2} className="rounded-2xl" style={{ borderRadius: '1rem' }}>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img src={man5} alt="Learner working on a laptop" className="w-full h-auto" />
              </div>
            </ElectricBorder>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
