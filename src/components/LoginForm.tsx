import { useState } from 'react';
import { login } from '../api';

function LoginForm({ onChallengeReceived }: { onChallengeReceived: (challenge: string) => void }) {
    const [state, setState] = useState({
        identifiant: '',
        mot_de_passe: '',
    });
    const [error, setError] = useState<string | null>(null);

    return (
        <div className="auth-card">
            <h2>Connexion</h2>
            <form onSubmit={async (e) => {
                e.preventDefault();
                setError(null);
                try {
                    const response = await login(state.identifiant, state.mot_de_passe);
                    onChallengeReceived(response.totp_challenge);
                } catch (err) {
                    setError('Identifiant ou mot de passe incorrect.');
                }
            }}>
                <div className="auth-field">
                    <label htmlFor="username">Identifiant</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={state.identifiant}
                        onChange={(e) => setState({ ...state, identifiant: e.target.value })}
                    />
                </div>
                <div className="auth-field">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={state.mot_de_passe}
                        onChange={(e) => setState({ ...state, mot_de_passe: e.target.value })}
                    />
                </div>
                {error && <p className="auth-error">{error}</p>}
                <button type="submit" className="auth-submit">Se connecter</button>
            </form>
        </div>
    );
}

export { LoginForm };
