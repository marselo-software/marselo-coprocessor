export default function Content() {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Marselo Documentation</h1>
          <p className="text-gray-600 text-lg">
            Welcome to the official Marselo documentation. Here, you'll find detailed information about how to use the Marselo platform, including setup, features, and best practices.
          </p>
        </header>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Introduction</h3>
              <p className="text-gray-600">
                Marselo is a decentralized platform that integrates Cartesi Coprocessor and Ethereum’s Solidity to deliver advanced off-chain computation with on-chain guarantees. The platform leverages the Cartesi Coprocessor to run complex models and AI algorithms off-chain, ensuring that all critical data and results are securely validated and accessible on-chain.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Architecture</h3>
              <p className="text-gray-600">
                By utilizing Cartesi's unique architecture, Marselo provides the scalability and flexibility needed for sophisticated AI agents, real-time insights, and data analysis, all within the blockchain ecosystem. The Ethereum network’s Solidity smart contracts handle the trading operations, while the Cartesi Coprocessor executes complex computations, creating a seamless interaction between on-chain and off-chain processes.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">MVP Models</h3>
              <p className="text-gray-600">
                This project is currently in the MVP stage, and we are using testnet data from Remix. In the future, we plan to integrate token swaps to gather more data from the network.
              </p>
            </div>
          </div>
        </section>

        {/* Setup Guide Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Setup Guide</h2>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Getting Started</h3>
            <p className="text-gray-600 mb-4">
              Step-by-step instructions on how to set up Marselo for your project, including installation and configuration.
            </p>
            <ol className="list-decimal list-inside text-gray-600">
              <li>Download the Marselo package from the official site.</li>
              <li>Install the package using your preferred package manager.</li>
              <li>Follow the setup wizard to configure your project.</li>
            </ol>
          </div>
        </section>

        {/* Support Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Support</h2>
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-gray-600">
              Need help? Visit our <a href="#" className="text-blue-600 hover:underline">support page</a> for FAQs, troubleshooting tips, and contact information for further assistance.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
