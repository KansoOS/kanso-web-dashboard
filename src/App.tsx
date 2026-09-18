import { useState } from "react"
import { LoginPage } from "./components/LoginPage"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (isLoggedIn) {
    return <div>
      Dashboard
    </div>
  }

  return <div>
    Login
    <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />
  </div>
}

export default App
