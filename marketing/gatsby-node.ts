import config from './gatsby-config';

// https://itnext.io/techniques-approaches-for-multi-language-gatsby-apps-8ba13ff433c5

/**
 * Makes sure to create localized paths for each file in the /pages folder.
 * For example, pages/404.js will be converted to /en/404.js and /el/404.js and
 * it will be accessible from https:// .../en/404/ and https:// .../el/404/
 */
exports.onCreatePage = async ({
  page,
  actions: { createPage, deletePage, createRedirect },
}) => {
  const isEnvDevelopment = process.env.NODE_ENV === 'development';
  const originalPath = page.path;

  // Delete the original page (since we are gonna create localized versions of it)
  await deletePage(page);

  // Create one page for each locale
  await Promise.all(
    config.siteMetadata.supportedLanguages.map(async (lang, index) => {
      const localizedPath = `/${lang}${page.path}`;

      createRedirect({
        fromPath: originalPath,
        toPath: localizedPath,
        Language: lang,
        isPermanent: false,
        redirectInBrowser: isEnvDevelopment,
        statusCode: 301,
      });

      await createPage({
        ...page,
        path: localizedPath,
        context: { ...page.context, lang, originalPath },
      });
    })
  );

  // Create a fallback redirect if the language is not supported or the
  // Accept-Language header is missing for some reason
  createRedirect({
    fromPath: originalPath,
    toPath: `/${config.siteMetadata.defaultLanguage}${page.path}`,
    isPermanent: false,
    redirectInBrowser: isEnvDevelopment,
    statusCode: 301,
  });
};
