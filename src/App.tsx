import { useState } from "react"
import "./App.css"
import { useMe } from "./hooks/useMe"
import { LoginPage } from "./components/LoginPage"
import { SignupForm } from "./components/SignupForm"

function App() {
  const { data: me, loading, refetch } = useMe()
  const [showSignup, setShowSignup] = useState(false)

  if (loading) {
    return (
      <div className="app">
        <p>Chargement...</p>
      </div>
    )
  }

  if (me) {
    return (
      <div className="app">
        <h1>Dashboard</h1>
        <div className="dashboard">
          <p>Connecté en tant que {me.identifiant} !</p>
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
          <LoginPage onLoginSuccess={() => refetch()} />
          <p className="auth-switch">
            Pas de compte ? <button onClick={() => setShowSignup(true)}>Créer un compte</button>
          </p>
        </>
      )}
    </div>
  )
}

export default App
