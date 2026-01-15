import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">ยินดีต้อนรับ</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">สู่แอปพลิเคชันของเรา</p>
          
          <SignedOut>
            <div className="space-y-4">
              <p className="text-lg opacity-95">เข้าสู่ระบบเพื่อเข้าถึงโปรไฟล์และทำให้เต็มศักยภาพของแอปฯ</p>
              <SignInButton>
                <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
                  เข้าสู่ระบบ
                </button>
              </SignInButton>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="space-y-4">
              <p className="text-lg opacity-95">คุณได้เข้าสู่ระบบเรียบร้อย!</p>
              <Link to="/profile" className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
                ไปที่โปรไฟล์
              </Link>
            </div>
          </SignedIn>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">คุณสมบัติ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">ง่ายต่อการใช้งาน</h3>
            <p className="text-gray-700">หน้าเว็บที่ง่ายและสะดวกในการใช้งาน พร้อมส่วนติดต่อที่เข้าใจง่าย</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">ปลอดภัย</h3>
            <p className="text-gray-700">ข้อมูลของคุณได้รับการปกป้องด้วย Clerk authentication system</p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">รวดเร็ว</h3>
            <p className="text-gray-700">ประสิทธิภาพสูงและตอบสนองไวขึ้น ให้ประสบการณ์ที่ลื่นไหล</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">เริ่มต้นใช้งานวันนี้</h2>
          <p className="text-xl mb-8 opacity-90">เข้าร่วมเรา และสัมผัสประสบการณ์ใหม่ที่ยอดเยี่ยม</p>
          <SignedOut>
            <SignInButton>
              <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105">
                เข้าสู่ระบบตอนนี้
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </section>
    </div>
  )
}
