"use client"
import { motion } from "framer-motion"

const SecuritySection = () => {
  return (
    <div className="bg-white mb-12 px-[10%]">
      <section
        className="w-full rounded-3xl py-16"
        style={{
          background: "linear-gradient(to bottom, #f0ff80, #a0ff9e)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Stay private and secure</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Rest easy knowing that our privacy and security measures keep you in control of your data and digital
              assets, while also keeping them safe.
            </p>
          </div>

          {/* Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden mb-16"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left Content */}
              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">True ownership of your crypto assets</h2>
                <p className="text-gray-700 mb-8">
                  We secure your wallet, but don't control or have access to your private keys or secret phrase - only
                  you do.
                </p>
                <div>
                  <a
                    href="#"
                    className="inline-block px-8 py-3 rounded-full bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="md:w-1/2 relative p-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K5zREV0AWTKreMxDspQsGKvZQrooEa.png"
                  alt="Security features illustration"
                  className="w-full h-full object-contain object-center rounded-3xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Three Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-md"
            >
              <h3 className="text-2xl font-bold mb-6">Added security with encryption</h3>
              <div className="mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WXvRtu0XszIU62B0TytrTU53n4LNFE.png"
                  alt="Encrypted Cloud"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <p className="text-gray-700">Use our Encrypted Cloud Backup for increased wallet security.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-md"
            >
              <h3 className="text-2xl font-bold mb-6">Zero personal tracking</h3>
              <div className="mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WXvRtu0XszIU62B0TytrTU53n4LNFE.png"
                  alt="Privacy Shield"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <p className="text-gray-700">
                We don't track any personal information, including your IP address or balances.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-md"
            >
              <h3 className="text-2xl font-bold mb-6">Proactive alerts for risky transactions</h3>
              <div className="mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WXvRtu0XszIU62B0TytrTU53n4LNFE.png"
                  alt="Alert Flag"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <p className="text-gray-700">Stay safe with alerts for risky address and dApp connections.</p>
            </motion.div>
          </div>

          {/* Learn More Button */}
          <div className="text-center">
            <a
              href="#"
              className="inline-block px-8 py-3 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-colors"
            >
              Learn more about privacy & security
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SecuritySection

