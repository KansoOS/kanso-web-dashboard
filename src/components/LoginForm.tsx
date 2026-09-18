import { useState } from 'react';
import { login } from '../api';

function LoginForm({ onChallengeReceived }: { onChallengeReceived: (challenge: string) => void }) {
    const [state, setState] = useState({
        identifiant: '',
        mot_de_passe: '',
    });
    const [error, setError] = useState<string | null>(null);

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={async (e) => {
                e.preventDefault();
                setError(null);
                try {
                    const response = await login(state.identifiant, state.mot_de_passe);
                    onChallengeReceived(response.totp_challenge);
                } catch (err) {
                    setError('Invalid username or password. Please try again.');
                }
            }}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={state.identifiant}
                        onChange={(e) => setState({...state, identifiant: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={state.mot_de_passe}
                        onChange={(e) => setState({...state, mot_de_passe: e.target.value})}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export { LoginForm };