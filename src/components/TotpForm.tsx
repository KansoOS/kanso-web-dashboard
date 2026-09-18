import { useState } from "react";
import { verifyTotp } from "../api";

function TotpForm({ totpChallenge, onLoginSuccess }: { totpChallenge: string; onLoginSuccess: () => void }) {
    const [totpCode, setTotpCode] = useState('');
    const [error, setError] = useState<string | null>(null);

    return (
        <div>
            <h2>Two-Factor Authentication</h2>
            <form onSubmit={async (e) => {
                e.preventDefault();
                setError(null);
                try {
                    await verifyTotp(totpChallenge, totpCode);
                    onLoginSuccess();
                } catch (err) {
                    setError('Invalid TOTP code. Please try again.');
                }
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
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
                <button type="submit">Verify</button>
            </form>
        </div>
    );
}

export { TotpForm };