
const PlatformFeatures = () => {
  return (
    <div className="bg-white px-[10%] pt-0">
      <div className="w-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl px-4 sm:px-8 py-12 sm:py-16">
        {/* Heading and Description */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
            One Platform, Millions of Assets
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-4xl mx-auto">
            As a leading self-custody multi-chain platform, we support millions of assets across 100+ blockchains. From
            Bitcoin, Ethereum, and Solana, to Cosmos, Optimism, and much more.
          </p>
        </div>

        {/* Wallet Button */}
        <div className="relative mb-10 max-w-5xl mx-auto text-center">
          <button className="bg-white py-3 sm:py-5 px-8 sm:px-12 rounded-full text-lg sm:text-xl font-medium text-blue-600 hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            Wallet
          </button>
        </div>

        {/* Features Table - Mobile Responsive */}
        <div className="bg-white rounded-2xl p-4 sm:p-8 overflow-x-auto shadow-lg mb-12 max-w-6xl mx-auto">
          <table className="min-w-full">
            {/* Table Headers */}
            <thead>
              <tr className="text-gray-700 font-medium">
                <th className="text-left py-3 px-2 sm:px-4 whitespace-nowrap text-base sm:text-xl">Chain</th>
                <th className="text-center py-3 px-2 whitespace-nowrap text-base sm:text-xl">Buy</th>
                <th className="text-center py-3 px-2 whitespace-nowrap text-base sm:text-xl">Sell</th>
                <th className="text-center py-3 px-2 whitespace-nowrap text-base sm:text-xl">Swap</th>
                <th className="text-center py-3 px-2 whitespace-nowrap text-base sm:text-xl">Earn</th>
                <th className="text-center py-3 px-2 whitespace-nowrap text-base sm:text-xl">dApps</th>
              </tr>
            </thead>
            <tbody>
              {/* BNB Smart Chain Row */}
              <tr className="border-b border-gray-100">
                <td className="py-5 sm:py-4 px-2 sm:px-4">
                  <div className="flex items-center">
                    <img
                      src="https://cryptologos.cc/logos/bnb-bnb-logo.png"
                      alt="BNB"
                      className="w-7 h-7 sm:w-12 sm:h-12 mr-3 sm:mr-4"
                    />
                    <span className="font-medium text-sm sm:text-lg whitespace-nowrap">BNB Smart Chain</span>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>

              {/* Bitcoin Row */}
              <tr className="border-b border-gray-100">
                <td className="py-5 sm:py-4 px-2 sm:px-4">
                  <div className="flex items-center">
                    <img
                      src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                      alt="Bitcoin"
                      className="w-7 h-7 sm:w-12 sm:h-12 mr-3 sm:mr-4"
                    />
                    <span className="font-medium text-sm sm:text-lg whitespace-nowrap">Bitcoin (BTC)</span>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="rounded-full p-0.5 sm:p-1.5 border border-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="rounded-full p-0.5 sm:p-1.5 border border-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="rounded-full p-0.5 sm:p-1.5 border border-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>

              {/* Cosmos Row */}
              <tr className="border-b border-gray-100">
                <td className="py-5 sm:py-4 px-2 sm:px-4">
                  <div className="flex items-center">
                    <img
                      src="https://cryptologos.cc/logos/cosmos-atom-logo.png"
                      alt="Cosmos"
                      className="w-7 h-7 sm:w-12 sm:h-12 mr-3 sm:mr-4"
                    />
                    <span className="font-medium text-sm sm:text-lg whitespace-nowrap">Cosmos (ATOM)</span>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="rounded-full p-0.5 sm:p-1.5 border border-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="rounded-full p-0.5 sm:p-1.5 border border-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>

              {/* Ethereum Row */}
              <tr className="border-b border-gray-100">
                <td className="py-5 sm:py-4 px-2 sm:px-4">
                  <div className="flex items-center">
                    <img
                      src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                      alt="Ethereum"
                      className="w-7 h-7 sm:w-12 sm:h-12 mr-3 sm:mr-4"
                    />
                    <span className="font-medium text-sm sm:text-lg whitespace-nowrap">Ethereum (ETH)</span>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>

              {/* Polkadot Row */}
              <tr>
                <td className="py-5 sm:py-4 px-2 sm:px-4">
                  <div className="flex items-center">
                    <img
                      src="https://cryptologos.cc/logos/polkadot-new-dot-logo.png"
                      alt="Polkadot"
                      className="w-7 h-7 sm:w-12 sm:h-12 mr-3 sm:mr-4"
                    />
                    <span className="font-medium text-sm sm:text-lg whitespace-nowrap">Polkadot (DOT)</span>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="rounded-full p-0.5 sm:p-1.5 border border-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="bg-blue-600 rounded-full p-0.5 sm:p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="py-5 sm:py-4 px-2 text-center">
                  <div className="flex justify-center">
                    <div className="rounded-full p-0.5 sm:p-1.5 border border-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12 md:mt-16">
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">10M+ Assets</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">600M+ NFTs</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">100+ Blockchains</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlatformFeatures


