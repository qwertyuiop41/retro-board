import Box from '../../../common/components/Box';
import Heading from '../../../common/components/Heading';
import Image from '../../../common/components/Image';
import Text from '../../../common/components/Text';
import Container from '../../../common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import SecureDashboardArea, { Col, Row } from './secureDashboard.style';
const SecureDashboard = () => {
  const Data = useStaticQuery(graphql`
    query {
      webAppJson {
        SECURE_DASHBOARD_DATA {
          sectionImage {
            publicURL
          }
          blockTitle {
            title
            text
          }
          posts {
            icon {
              publicURL
            }
            title
            text
          }
        }
      }
    }
  `);
  const [tab, setTab] = useState({
    toggle: 'tab-1',
  });
  const { sectionImage, blockTitle, posts } =
    Data.webAppJson.SECURE_DASHBOARD_DATA;
  const { title, text } = blockTitle;
  const handleClick = (tabName) => {
    setTab({
      ...tab,
      toggle: tabName,
    });
  };
  return (
    <SecureDashboardArea id="dashboard_section">
      <Container>
        <Row>
          <Col className="image">
            {'tab-1' === tab.toggle ? (
              <Image
                src={sectionImage.publicURL}
                alt=""
                className="sectionImage"
              />
            ) : null}
            {'tab-2' === tab.toggle ? (
              <Image
                src={sectionImage.publicURL}
                alt=""
                className="sectionImage"
              />
            ) : null}
          </Col>
          <Col className="content">
            <Box className="blockTitle">
              <Heading as="h2" content={title} />
              <Text as="p" content={text} />
            </Box>
            <Box className="postWrap">
              {posts.map(({ icon, title, text }, index) => (
                <Box
                  className={`post ${
                    tab.toggle === `tab-${index + 1}` ? 'active' : null
                  }`}
                  onClick={() => handleClick(`tab-${index + 1}`)}
                  key={`post-key-${index}`}
                >
                  <Box className="image">
                    <Image src={icon.publicURL} alt="" />
                  </Box>
                  <Box className="postContent">
                    <Heading as="h3" content={title} />
                    <Text as="p" content={text} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Col>
        </Row>
      </Container>
    </SecureDashboardArea>
  );
};

export default SecureDashboard;
