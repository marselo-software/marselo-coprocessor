export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-yellow-500 shadow-lg">
      <a href="/" className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo Arsit" className="h-10 w-auto" />
        <span className="text-green-900 font-bold text-xl">Marselo Software</span>
      </a>
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-green-900 font-medium hover:text-green-700 transition duration-300"
          >
            Home
          </a>
          <a
            href="/demo"
            className="text-green-900 font-medium hover:text-green-700 transition duration-300"
          >
            Demo
          </a>
          <a
            href="https://marselo-software.github.io/marselo-docs/"
            className="text-green-900 font-medium hover:text-green-700 transition duration-300"
          >
            Documentation
          </a>
          <a
            href="#"
            className="text-green-900 font-medium hover:text-green-700 transition duration-300"
          >
            Contact
          </a>
        </div>
        <button className="md:hidden text-green-900 hover:text-green-700 transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
