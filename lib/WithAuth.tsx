import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  isPrivate = false,
) => {
  return function WithAuthWrapper(props: P) {
    const router = useRouter()
    const { token } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
      if (isPrivate && !token) {
        router.replace('/login')
      }
    }, [token, router])

    if (isPrivate && !token) return null

    return <WrappedComponent {...props} />
  }
}

export default withAuth
