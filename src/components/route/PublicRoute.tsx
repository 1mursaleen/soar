import { Navigate, Outlet } from 'react-router-dom'
import appConfig from '@/configs/app.config'
import useAuth from '@/utils/hooks/useAuth'

const { authenticatedEntryPath } = appConfig

const PublicRoute = () => {
    // const { authenticated } = useAuth()

    return  <Navigate to={authenticatedEntryPath} />
}

export default PublicRoute
