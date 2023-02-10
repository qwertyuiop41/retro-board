import React from 'react';
import { useTranslation } from 'react-i18next';

const PageContext = React.createContext<PageContextType>({ lang: 'en' });

type PageContextType = {
  lang: string;
};

type PageContextProps = {
  pageContext: PageContextType;
  children: React.ReactNode;
};

export const PageContextProvider = ({
  pageContext,
  children,
}: PageContextProps) => {
  const { i18n } = useTranslation();
  i18n.changeLanguage(pageContext.lang);

  return (
    <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>
  );
};

export const usePageContext = () => React.useContext(PageContext);
