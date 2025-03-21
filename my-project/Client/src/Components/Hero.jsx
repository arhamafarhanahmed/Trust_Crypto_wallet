import React from 'react'

const Hero = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              True crypto ownership.
              <br />
              Powerful Web3
              <br />
              experiences
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Unlock the power of your cryptocurrency assets and
              explore the world of Web3 with Trust Wallet.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#download-mobile" 
                className="flex items-center justify-center space-x-2 border-2 border-blue-600 rounded-full px-6 py-3 text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-sm">Download</span>
                  <span className="font-medium">Mobile App</span>
                </div>
              </a>
              
              <a 
                href="#download-extension" 
                className="flex items-center justify-center space-x-2 border-2 border-blue-600 rounded-full px-6 py-3 text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-sm">Download</span>
                  <span className="font-medium">Extension</span>
                </div>
              </a>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Colorful background elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute top-40 -right-10 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              
              {/* Main image - replace with your actual image */}
              <img 
                src="/wallet-mockup.png" 
                alt="Trust Wallet Interface" 
                className="relative z-10 mx-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/500x600?text=Wallet+Mockup';
                }}
              />
              
              {/* Floating elements */}
              <div className="absolute top-1/4 -left-10 z-20 w-20 h-20 bg-blue-500 rounded-lg transform rotate-12 shadow-lg"></div>
              <div className="absolute bottom-1/4 right-0 z-20 w-16 h-16 bg-yellow-400 rounded-lg transform -rotate-12 shadow-lg"></div>
              <div className="absolute bottom-10 left-1/4 z-20 w-24 h-24 bg-pink-400 rounded-full transform shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero