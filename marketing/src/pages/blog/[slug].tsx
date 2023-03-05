import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import markdownToHtml from '@/lib/mdToHtml';
import { BlogDocument, BlogMetadata } from '@/lib/getBlog';
import Layout from '@/containers/Layout/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MenuItem } from '@/types';
import LegalContent from '@/containers/Legal/LegalContent';
import { getAllBlogs, getBlogBySlug } from '@/lib/getBlog';
import BlogContent from '@/containers/blog/BlogContent';
import styled from 'styled-components';

type Props = {
  document: BlogDocument;
  legals: BlogMetadata[];
};

export const menuItems: MenuItem[] = [
  {
    label: 'Nav.home',
    path: '/',
    offset: '70',
  },
];

export default function Blog({ document, legals }: Props) {
  const router = useRouter();

  const title = `${document.title} | Retrospected`;
  if (!router.isFallback && !document) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout legals={legals} menuItems={menuItems}>
      <article>
        <Head>
          <title>{title}</title>
        </Head>
        <Content>
          <BlogContent document={document} />
        </Content>
      </article>
    </Layout>
  );
}

const Content = styled.div`
  padding: 20px;
`;

type Params = {
  locale?: string;
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params, locale }: Params) {
  const legals = getAllBlogs();
  const document = getBlogBySlug(params.slug);
  // const content = await markdownToHtml(document.content || '');

  return {
    props: {
      legals,
      document: {
        ...document,
        // content,
      },
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
  const posts = getAllBlogs();

  const paths = {
    paths: locales
      .map((locale) => {
        return posts.map((post) => {
          return {
            params: {
              slug: post.slug,
            },
            locale,
          };
        });
      })
      .flat(),
    fallback: false,
  };

  return paths;
}
