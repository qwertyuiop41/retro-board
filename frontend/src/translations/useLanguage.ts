import { useCallback, useContext, useMemo } from 'react';
import languages, { Language } from './languages';
import { useTranslation } from 'react-i18next';
import { setItem } from '../utils/localStorage';
import { updateLanguage } from 'api';
import UserContext from 'auth/Context';

type UseLanguageResult = [
  language: Language,
  changeLanguage: (lng: string) => Promise<void>
];

export default function useLanguage(): UseLanguageResult {
  const { i18n } = useTranslation();
  const { setUser } = useContext(UserContext);

  const languageIso = i18n.language;
  const language = useMemo(() => {
    const foundLanguage = languages.find((l) => l.value === languageIso);
    return foundLanguage || languages[0];
  }, [languageIso]);

  const handleChangeLanguage = useCallback(
    async (language: string) => {
      setItem('language', language);
      i18n.changeLanguage(language);
      const updatedUser = await updateLanguage(language);
      if (updatedUser) {
        setUser(updatedUser);
      }
    },
    [setUser, i18n]
  );

  return [language, handleChangeLanguage];
}
