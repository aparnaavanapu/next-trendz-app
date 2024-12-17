import { useNavigate } from 'react-router-dom'
import LoginForm from '../LoginForm'

const LoginFormWrapper = () => {
  const navigate = useNavigate() // Retrieve the navigate function
  return <LoginForm navigate={navigate} />
}

export default LoginFormWrapper
