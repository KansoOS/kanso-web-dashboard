import { useState } from "react"
import { LoginForm } from "./components/LoginForm"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (isLoggedIn) {
    return <div>
      Dashboard
    </div>
  }

  return <div>
    Login
    <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
  </div>
}

export default App
