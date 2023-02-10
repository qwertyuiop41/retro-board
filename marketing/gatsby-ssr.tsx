import React from 'react';
import i18n from './src/translations/i18next';
import { I18nextProvider } from 'react-i18next';
import { PageContextProvider } from './src/contexts/PageContext';

export const wrapRootElement = ({ element }) => {
  return <I18nextProvider i18n={i18n}>{element}</I18nextProvider>;
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <PageContextProvider pageContext={props.pageContext}>
      {element}
    </PageContextProvider>
  );
};
