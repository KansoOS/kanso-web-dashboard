import { useState } from 'react';
import { login, verifyTotp } from '../api';

function LoginForm() {
    const [state, setState] = useState({
        identifiant: '',
        mot_de_passe: '',
    });
    const [totpChallenge, setTotpChallenge] = useState<string | null>(null);
    const [totpCode, setTotpCode] = useState('');
    if (totpChallenge) {
        return (
            <div>
                <h2>Two-Factor Authentication</h2>
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    await verifyTotp(totpChallenge, totpCode);
                    console.log('TOTP verified successfully');
                }}>
                    <div>
                        <label htmlFor="totp">Enter TOTP Code:</label>
                        <input 
                            type="text" 
                            id="totp" 
                            name="totp"
                            value={totpCode}
                            onChange={(e) => setTotpCode(e.target.value)}
                        />
                    </div>
                    <button type="submit">Verify</button>
                </form>
            </div>
        );
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={async (e) => {
                e.preventDefault();
                const response = await login(state.identifiant, state.mot_de_passe);
                setTotpChallenge(response.totp_challenge);
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export { LoginForm };