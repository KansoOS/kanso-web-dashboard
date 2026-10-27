import { LockIcon } from './icons';
import { useT } from '../i18n/useI18n';

function Footer() {
    const t = useT();
    const year = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <p className="app-footer-data">{t('footer.dataMinimization')}</p>
            <details className="app-footer-privacy">
                <summary>
                    <LockIcon />
                    {t('footer.privacyToggle')}
                </summary>
                <p>{t('footer.privacyDetail')}</p>
            </details>
            <p className="app-footer-copyright">{t('footer.copyright', { year })}</p>
        </footer>
    );
}

export { Footer };
