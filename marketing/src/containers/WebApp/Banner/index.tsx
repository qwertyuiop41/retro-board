import Box from '../../../common/components/Box';
import Heading from '../../../common/components/Heading';
import Text from '../../../common/components/Text';
import Container from '../../../common/components/UI/Container';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import BannerArea, { Col } from './banner.style';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const Data = useStaticQuery(graphql`
    query {
      webAppJson {
        BANNER_DATA {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  const img = getImage(Data.webAppJson.BANNER_DATA.image);
  const { t } = useTranslation();
  return (
    <BannerArea id="banner_section">
      <Container className="Container">
        <Col>
          <Heading as="h2" content={t('Banner.title')} />
          <Text as="p" content={t('Banner.text')} />
          <Box className="ButtonWrap">
            <Link className="Button" to={'/'}>
              {t('Banner.button.label')}
              <Icon size={18} icon={androidArrowForward} />
            </Link>
            <Text as="span" content={t('Banner.tagline')} />
          </Box>
        </Col>
      </Container>
      <Box className="bannerImage">
        <GatsbyImage image={img as any} alt="" key={`banner-image-key`} />
      </Box>
    </BannerArea>
  );
};

export default Banner;
