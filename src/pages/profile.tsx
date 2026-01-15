import { Navigate } from 'react-router'
import { useAuth, useUser } from '@clerk/clerk-react'

export default function Profile() {
  const { isLoaded, isSignedIn } = useAuth()
  const { user } = useUser()

  // Show loading state
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Redirect to home if not signed in
  if (!isSignedIn) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32"></div>
          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 -mt-16 mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-5xl">
                {user?.firstName?.charAt(0) || '👤'}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {user?.firstName} {user?.lastName}
                </h1>
                <p className="text-gray-600 mt-2">โปรไฟล์ของคุณ</p>
              </div>
            </div>

            {/* Profile Details */}
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors">
                <p className="text-sm text-gray-600 font-medium">ชื่อจริง</p>
                <p className="text-lg text-gray-900 font-semibold">{user?.firstName || '-'}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors">
                <p className="text-sm text-gray-600 font-medium">นามสกุล</p>
                <p className="text-lg text-gray-900 font-semibold">{user?.lastName || '-'}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors">
                <p className="text-sm text-gray-600 font-medium">อีเมล</p>
                <p className="text-lg text-gray-900 font-semibold break-all">
                  {user?.primaryEmailAddress?.emailAddress || '-'}
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors">
                <p className="text-sm text-gray-600 font-medium">User ID</p>
                <p className="text-lg text-gray-900 font-semibold break-all font-mono text-sm">{user?.id}</p>
              </div>

              {user?.phoneNumbers && user.phoneNumbers.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors">
                  <p className="text-sm text-gray-600 font-medium">เบอร์โทรศัพท์</p>
                  <p className="text-lg text-gray-900 font-semibold">
                    {user.phoneNumbers[0].phoneNumber}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">สถานะการยืนยัน</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-700">อีเมลได้รับการยืนยัน</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">ข้อมูลบัญชี</h2>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">สร้างเมื่อ:</span> {new Date(user?.createdAt || '').toLocaleDateString('th-TH')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}