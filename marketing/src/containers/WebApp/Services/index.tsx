import Box from '../../../common/components/Box';
import Heading from '../../../common/components/Heading';
import Image from '../../../common/components/Image';
import Text from '../../../common/components/Text';
import Container from '../../../common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ServicesArea, { Col, Row } from './services.style';
import { useTranslation } from 'react-i18next';
import { GatsbyImage } from 'gatsby-plugin-image';

const Services = () => {
  const { t } = useTranslation();
  // const Data = useStaticQuery(graphql`
  //   query ($language: String!) {
  //     allTranslationsJson(filter: { lang: { eq: $language } }) {
  //       nodes {
  //         retrospected {
  //           Banner {
  //             title
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // console.log('Data: ', Data);
  return (
    <ServicesArea id="service_section">
      <Container>
        <Row>
          {t('Services', { returnObjects: true }).map(
            ({ icon, title, text }, index) => (
              <Col key={`service-post-key-${index}`}>
                <Box className="servicePost">
                  <div className="service-icon">
                    <Image src={icon.publicURL} alt="" />
                  </div>
                  <Box className="content">
                    <Heading as="h3" content={title} />
                    <Text as="p" content={text} />
                  </Box>
                </Box>
              </Col>
            )
          )}
        </Row>
      </Container>
    </ServicesArea>
  );
};

export default Services;
