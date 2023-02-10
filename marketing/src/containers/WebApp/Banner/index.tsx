import Box from '../../../common/components/Box';
import Heading from '../../../common/components/Heading';
import Image from '../../../common/components/Image';
import Text from '../../../common/components/Text';
import Container from '../../../common/components/UI/Container';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import BannerArea, { Col } from './banner.style';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Banner = () => {
  const Data = useStaticQuery(graphql`
    query {
      webAppJson {
        BANNER_DATA {
          title
          text
          button {
            link
            label
          }
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          tagline
        }
      }
    }
  `);
  const { title, text, button, image, tagline } = Data.webAppJson.BANNER_DATA;
  const img = getImage(image);
  // const { title, text, button, image, tagline } = {
  //   title: 'Web App',
  //   text: 'A web application or web app is a client–server software application in which the client (or user interface) runs in a web browser.',
  //   button: {
  //     link: '#',
  //     label: 'Get Started',
  //   },
  //   image: [
  //     {
  //       src: {
  //         publicURL:
  //           'https://res.cloudinary.com/dq7lqzjxw/image/upload/v1607410009/landing-page/landing-page-1.png',
  //       },
  //     },
  //   ],
  //   tagline: 'Start your 14 days free trial',
  // };
  return (
    <BannerArea id="banner_section">
      <Container className="Container">
        <Col>
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
          <Box className="ButtonWrap">
            <Link className="Button" to={button.link}>
              {button.label}
              <Icon size={18} icon={androidArrowForward} />
            </Link>
            <Text as="span" content={tagline} />
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
