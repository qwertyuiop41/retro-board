interface HtmlConfig {
  GOOGLE_ANALYTICS_ID: string;
  GOOGLE_AD_WORDS_ID: string;
  GOOGLE_AD_WORDS_EVENT: string;
  SENTRY_URL: string;
  GIPHY_API_KEY: string;
  STRIPE_KEY: string;
  DEFAULT_LANGUAGE: string;
  VERSION: string;
  MARKETING_ROOT: string;
}

interface Config {
  hasGA: boolean;
  hasSentry: boolean;
  hasGiphy: boolean;
  GoogleAnalyticsId: string;
  googleAdWordsId: string;
  googleAdWordsEvent: string;
  SentryUrl: string;
  GiphyApiKey: string;
  StripeKey: string;
  defaultLanguage: string;
  version: string;
  marketingRoot: string;
}

declare global {
  interface Window {
    __env__: HtmlConfig;
  }
}

window.__env__ = window.__env__ || {};

function getKey(
  key:
    | 'GOOGLE_ANALYTICS_ID'
    | 'GOOGLE_AD_WORDS_ID'
    | 'GOOGLE_AD_WORDS_EVENT'
    | 'SENTRY_URL'
    | 'GIPHY_API_KEY'
    | 'STRIPE_KEY'
    | 'MARKETING_ROOT'
    | 'DEFAULT_LANGUAGE',
  noValue: string,
  defaultValue?: string
): string {
  if (import.meta.env[`VITE_${key}`]) {
    return import.meta.env[`VITE_${key}`] || '';
  }
  if (!!window.__env__[key] && window.__env__[key] !== noValue) {
    return window.__env__[key];
  }
  return defaultValue || '';
}

function getConfig(): Config {
  const googleAnalyticsId = getKey('GOOGLE_ANALYTICS_ID', 'NO_GA');
  const googleAdWordsId = getKey('GOOGLE_AD_WORDS_ID', 'NO_AD_WORDS_EVENT');
  const googleAdWordsEvent = getKey(
    'GOOGLE_AD_WORDS_EVENT',
    'NO_AD_WORDS_EVENT'
  );
  const sentryUrl = getKey('SENTRY_URL', 'NO_SENTRY');
  const giphyApiKey = getKey('GIPHY_API_KEY', 'NO_GIPHY');
  const stripeKey = getKey('STRIPE_KEY', 'NO_STRIPE');
  const marketingRoot = getKey('MARKETING_ROOT', 'NO_MARKETING_ROOT');
  let defaultLanguage = getKey(
    'DEFAULT_LANGUAGE',
    'NO_DEFAULT_LANGUAGE',
    'en-GB'
  );

  if (defaultLanguage.length !== 5) {
    console.error(
      'Your default language (DEFAULT_LANGUAGE) is not in the right format. The right format should be a string of 5 characters, for example: en-GB, fr-FR, etc.'
    );
    defaultLanguage = 'en-GB';
  }

  return {
    hasGA: !!googleAnalyticsId,
    hasSentry: !!sentryUrl,
    hasGiphy: !!giphyApiKey,
    GoogleAnalyticsId: googleAnalyticsId,
    googleAdWordsId,
    googleAdWordsEvent,
    SentryUrl: sentryUrl,
    GiphyApiKey: giphyApiKey,
    StripeKey: stripeKey,
    defaultLanguage: defaultLanguage,
    version: APP_VERSION,
    marketingRoot,
  };
}

export default getConfig();
