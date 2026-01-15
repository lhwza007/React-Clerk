import { Link } from 'react-router'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              My App
            </Link>
          </div>

          <ul className="hidden md:flex list-none gap-8 m-0 p-0">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                หน้าหลัก
              </Link>
            </li>
            <SignedIn>
              <li>
                <Link to="/profile" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  โปรไฟล์
                </Link>
              </li>
            </SignedIn>
          </ul>

          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  เข้าสู่ระบบ
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  )
}

