import { useTheme } from '../../theme/ThemeProvider'
import hero from '../../assets/landing/man2.png'

export default function BootcampRegister() {
  const { isDark } = useTheme()

  return (
    <section className={`w-full ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10">
        {/* Back link */}
        <div className="mb-4">
          <a href="#/bootcamps" className={`inline-flex items-center gap-2 text-sm ${isDark ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-gray-900'}`}>
            <span aria-hidden>←</span> Back to Bootcamp
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left summary */}
          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden">
              <img src={hero} alt="Bootcamp" className="w-full h-auto" />
            </div>
            <h1 className="font-syne text-2xl sm:text-3xl md:text-4xl font-bold">Upskill Yourself with our Bootcamp</h1>
            <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Master the art of writing efficient, secure, and scalable smart contracts. Dive into Solidity, auditing
              methods, gas optimization, and real-world case studies to prevent exploits and safeguard users.
            </p>
          </div>

          {/* Right form */}
          <div className={`rounded-2xl border p-6 sm:p-8 ${isDark ? 'border-neutral-800 bg-black' : 'border-neutral-200 bg-white'}`}>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-green-100 flex items-center justify-center">
                <span className="text-green-700 text-sm">🅰️</span>
              </div>
              <h2 className="font-syne text-2xl sm:text-3xl font-bold">Bootcamp Registration</h2>
            </div>
            <p className={`${isDark ? 'text-neutral-300' : 'text-neutral-600'} mt-2 text-sm`}>Please enter your correct information to register</p>

            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-xs font-medium mb-1">First Name <span className="text-red-500">*</span></label>
                <input className={`w-full rounded-full px-4 py-3 text-sm outline-none ${isDark ? 'bg-neutral-900 border border-neutral-800' : 'bg-white border border-neutral-200'}`} placeholder="Enter your firstname" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-xs font-medium mb-1">Last Name <span className="text-red-500">*</span></label>
                <input className={`w-full rounded-full px-4 py-3 text-sm outline-none ${isDark ? 'bg-neutral-900 border border-neutral-800' : 'bg-white border border-neutral-200'}`} placeholder="Enter your lastname" />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs font-medium mb-1">Email address <span className="text-red-500">*</span></label>
                <input type="email" className={`w-full rounded-full px-4 py-3 text-sm outline-none ${isDark ? 'bg-neutral-900 border border-neutral-800' : 'bg-white border border-neutral-200'}`} placeholder="Enter your email" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-xs font-medium mb-1">Confirm email <span className="text-red-500">*</span></label>
                <input type="email" className={`w-full rounded-full px-4 py-3 text-sm outline-none ${isDark ? 'bg-neutral-900 border border-neutral-800' : 'bg-white border border-neutral-200'}`} placeholder="Enter your email" />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs font-medium mb-1">Phone / WhatsApp no <span className="text-red-500">*</span></label>
                <input className={`w-full rounded-full px-4 py-3 text-sm outline-none ${isDark ? 'bg-neutral-900 border border-neutral-800' : 'bg-white border border-neutral-200'}`} placeholder="Enter your number" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-xs font-medium mb-1">Gender <span className="text-red-500">*</span></label>
                <select className={`w-full rounded-full px-4 py-3 text-sm outline-none appearance-none ${isDark ? 'bg-neutral-900 border border-neutral-800' : 'bg-white border border-neutral-200'}`}>
                  <option value="">Select your gender</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Prefer not to say</option>
                </select>
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs font-medium mb-1">Country <span className="text-red-500">*</span></label>
                <input className={`w-full rounded-full px-4 py-3 text-sm outline-none ${isDark ? 'bg-neutral-900 border border-neutral-800' : 'bg-white border border-neutral-200'}`} placeholder="Select your country" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-xs font-medium mb-1">City / State <span className="text-red-500">*</span></label>
                <input className={`w-full rounded-full px-4 py-3 text-sm outline-none ${isDark ? 'bg-neutral-900 border border-neutral-800' : 'bg-white border border-neutral-200'}`} placeholder="Select your state" />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium mb-1">Bootcamp Program <span className="text-red-500">*</span></label>
                <select className={`w-full rounded-full px-4 py-3 text-sm outline-none appearance-none ${isDark ? 'bg-neutral-900 border border-neutral-800' : 'bg-white border border-neutral-200'}`}>
                  <option>Web and Javascript Development</option>
                  <option>Product Design</option>
                  <option>Web3 Protocol Engineering</option>
                  <option>Blockchain Security</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium mb-1">How did you hear of Guild Academy?</label>
                <input className={`w-full rounded-full px-4 py-3 text-sm outline-none ${isDark ? 'bg-neutral-900 border border-neutral-800' : 'bg-white border border-neutral-200'}`} placeholder="e.g. Facebook, Twitter, Online" />
              </div>

              <div className="sm:col-span-2 flex items-start gap-2 text-xs">
                <input id="tos" type="checkbox" className={`mt-1 h-4 w-4 rounded ${isDark ? 'bg-neutral-900 border-neutral-700' : 'bg-white border-neutral-300'}`} />
                <label htmlFor="tos">I agree to the Terms and Conditions of Guild Academy</label>
              </div>

              <div className="sm:col-span-2">
                <button type="button" className="inline-flex items-center gap-2 rounded-full bg-green-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-green-700">
                  Register Bootcamp <span aria-hidden>↗</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
