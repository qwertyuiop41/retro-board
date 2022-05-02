import { useEffect, PropsWithChildren } from 'react';
import { getItem } from '../utils/localStorage';
import useUser from '../auth/useUser';
import { useTranslation } from 'react-i18next';

export default function LanguageProvider({ children }: PropsWithChildren<{}>) {
  const user = useUser();
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);

  useEffect(() => {
    if (user) {
      i18n.changeLanguage(user.language);
    }
  }, [user, i18n]);

  return <>{children}</>;
}
