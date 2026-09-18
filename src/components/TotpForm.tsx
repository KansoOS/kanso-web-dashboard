import { useState } from "react";
import { verifyTotp } from "../api";

function TotpForm({ totpChallenge, onLoginSuccess }: { totpChallenge: string; onLoginSuccess: () => void }) {
    const [totpCode, setTotpCode] = useState('');
    const [error, setError] = useState<string | null>(null);

    return (
        <div className="auth-card">
            <h2>Vérification en deux étapes</h2>
            <form onSubmit={async (e) => {
                e.preventDefault();
                setError(null);
                try {
                    await verifyTotp(totpChallenge, totpCode);
                    onLoginSuccess();
                } catch (err) {
                    setError('Code invalide, réessayez.');
                }
            }}>
                <div className="auth-field">
                    <label htmlFor="totp">Code de l'application d'authentification</label>
                    <input
                        type="text"
                        id="totp"
                        name="totp"
                        value={totpCode}
                        onChange={(e) => setTotpCode(e.target.value)}
                    />
                </div>
                {error && <p className="auth-error">{error}</p>}
                <button type="submit" className="auth-submit">Vérifier</button>
            </form>
        </div>
    );
}

export { TotpForm };
