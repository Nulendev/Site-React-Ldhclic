import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            
            <Link href="/" className="block" aria-label="Logo">
    <svg className="w-10 h-10 text-purple-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 3H10V2h4v1h-2.5zM20 10h-3v11H7V10H4V9h16v1zm-5-7h-6V1H9C7.346 1 6 2.346 6 4v5H3v3h1v4h4v-4h3v4h4v-4h3V9h1V4c0-1.654-1.346-3-3-3zm1 8h-2v2h2v-2z" fill="#6C63FF" />
    </svg>
  </Link>

          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Connexion
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Inscription
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
