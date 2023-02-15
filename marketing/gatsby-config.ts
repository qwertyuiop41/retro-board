import type { GatsbyConfig } from 'gatsby';

type RetrospectedGatsbyConfig = GatsbyConfig & {
  siteMetadata: {
    supportedLanguages: string[];
  };
};

const config: RetrospectedGatsbyConfig = {
  siteMetadata: {
    title: `Retrospected`,
    siteUrl: `https://www.retrospected.com`,
    description:
      'Retrospected is a free and open source tool to run retrospectives online.',
    author: 'Antoine Jaussoin',
    supportedLanguages: ['en', 'fr'],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    // "gatsby-plugin-google-gtag",
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/common/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `common`,
        path: `${__dirname}/src/common/assets/`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-nginx-redirect',
    //   options: {
    //     inputConfigFile: `${__dirname}/docker/nginx.conf.template`,
    //     outputConfigFile: `${__dirname}/docker/nginx.conf.template.generated`,
    //     whereToIncludeRedirects: 'server.http', // defaults to: "server"
    //   },
    // },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/translations`,
        name: `translations`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-react-i18next`,
    //   options: {
    //     localeJsonSourceName: `locale`,
    //     languages: [`en`, `fr`],
    //     defaultLanguage: `en`,
    //     siteUrl: `http://localhost:8000/`,
    //     i18nextOptions: {
    //       interpolation: {
    //         escapeValue: false,
    //       },
    //       keySeparator: false,
    //       nsSeparator: false,
    //     },
    //     pages: [
    //       {
    //         matchPath: '/:lang?/blog/:uid',
    //         getLanguageFromPath: true,
    //         excludeLanguages: ['es'],
    //       },
    //       {
    //         matchPath: '/preview',
    //         languages: ['en'],
    //       },
    //     ],
    //   },
    // },
  ],
};

export default config;
