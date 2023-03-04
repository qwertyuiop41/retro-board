import React from 'react';
import NextLink from 'next/link';
import { Icon } from 'react-icons-kit';
import Fade from 'react-reveal/Fade';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from '@/common/components/UI/Container';
import Heading from '@/common/components/Heading';
import NextImage from '@/common/components/NextImage';
import Text from '@/common/components/Text';
import Link from '@/common/components/Link';

import { posts } from '@/common/data/WebAppCreative';
import {
  Section,
  SectionHeading,
  Grid,
  Article,
  ImageContainer,
} from './newsFeed.style';
import { useTranslation } from 'next-i18next';
import { BlogMetadata } from '@/lib/getBlog';

type NewsFeedProps = {
  articles: BlogMetadata[];
};

const NewsFeed = ({ articles }: NewsFeedProps) => {
  const { t } = useTranslation();
  return (
    <Section id="newsfeed">
      <Container width="1400px">
        <SectionHeading>
          <Heading content={t('Newsfeed.heading')} />
        </SectionHeading>
        <Grid>
          {articles.map((post, i) => (
            <Fade key={post.slug} up delay={(i + 1) * 100}>
              <Article>
                <ImageContainer>
                  <NextImage src={post.cover} alt={post.title} fill />
                  {/* <img src={post.cover} alt={post.title} /> */}
                </ImageContainer>
                <Text content={post.date} />
                <Heading as="h4" content={post.title} />
                <NextLink href={`blog/${post.slug}`}>
                  {post.subtitle} <Icon icon={arrowRight} />
                </NextLink>
              </Article>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default NewsFeed;
