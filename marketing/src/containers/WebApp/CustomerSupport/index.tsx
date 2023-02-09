import Box from '../../../common/components/Box';
import Heading from '../../../common/components/Heading';
import Image from '../../../common/components/Image';
import Container from '../../../common/components/UI/Container';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import { androidDone } from 'react-icons-kit/ionicons/androidDone';
import CustomerSupportArea, { Row } from './customerSupport.style';
const CustomerSupport = () => {
  const Data = useStaticQuery(graphql`
    query {
      webAppJson {
        CUSTOMER_SUPPORT_DATA {
          image {
            publicURL
          }
          shapeImage {
            publicURL
          }
          title
          options {
            label
          }
          button {
            label
            link
          }
        }
      }
    }
  `);
  const { image, shapeImage, title, options, button } =
    Data.webAppJson.CUSTOMER_SUPPORT_DATA;
  return (
    <CustomerSupportArea>
      <Container>
        <Box className="blockTitle">
          <Heading as="h2" content={title} />
        </Box>
        <Row>
          <Box className="image">
            <Image src={image.publicURL} alt="customer support image" />
            <Image
              src={shapeImage.publicURL}
              alt="customer support"
              className="shapeImage"
            />
          </Box>
          <Box className="content">
            <Box className="contentInner">
              <ul className="options">
                {options.map(({ label }, index) => (
                  <li className="optionsItem" key={`option-key-${index}`}>
                    <Icon icon={androidDone} size={24} />
                    {label}
                  </li>
                ))}
              </ul>
              <Link to={button.link} className="button">
                <span>
                  {button.label}
                  <Icon icon={androidArrowForward} size={19} />
                </span>
              </Link>
            </Box>
          </Box>
        </Row>
      </Container>
    </CustomerSupportArea>
  );
};

export default CustomerSupport;
