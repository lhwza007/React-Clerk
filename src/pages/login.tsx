import { SignIn } from '@clerk/clerk-react'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useAuth } from '@clerk/clerk-react'

export default function Login() {
  const { isLoaded, isSignedIn } = useAuth()
  const navigate = useNavigate()

  // Redirect to home if already signed in
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate('/')
    }
  }, [isLoaded, isSignedIn, navigate])

  return (
    

          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <SignIn routing="hash" />
          </div>

          
  )
}
