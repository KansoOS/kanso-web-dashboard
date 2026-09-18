import { useState } from "react"
import "./App.css"
import { LoginPage } from "./components/LoginPage"
import { SignupForm } from "./components/SignupForm"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  if (isLoggedIn) {
    return (
      <div className="app">
        <h1>Dashboard</h1>
        <div className="dashboard">
          <p>Connecté !</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <h1>KansoOS</h1>
      {showSignup ? (
        <>
          <SignupForm />
          <p className="auth-switch">
            Déjà un compte ? <button onClick={() => setShowSignup(false)}>Se connecter</button>
          </p>
        </>
      ) : (
        <>
          <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />
          <p className="auth-switch">
            Pas de compte ? <button onClick={() => setShowSignup(true)}>Créer un compte</button>
          </p>
        </>
      )}
    </div>
  )
}

export default App
