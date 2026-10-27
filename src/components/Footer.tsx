import { LockIcon, ShieldIcon } from './icons';
import { useT } from '../i18n/useI18n';

function Footer() {
    const t = useT();
    const year = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <p className="app-footer-data">{t('footer.dataMinimization')}</p>

            <div className="app-footer-links">
                <details className="app-footer-disclosure">
                    <summary>
                        <LockIcon />
                        {t('footer.privacyToggle')}
                    </summary>
                    <p>{t('footer.privacyDetail')}</p>
                </details>

                <details className="app-footer-disclosure">
                    <summary>
                        <ShieldIcon />
                        {t('footer.legalToggle')}
                    </summary>
                    <p>{t('footer.legalDetail')}</p>
                </details>

                <details className="app-footer-disclosure">
                    <summary>{t('footer.contactToggle')}</summary>
                    <p>{t('footer.contactDetail')}</p>
                </details>
            </div>

            <p className="app-footer-copyright">{t('footer.copyright', { year })}</p>
        </footer>
    );
}

export { Footer };
