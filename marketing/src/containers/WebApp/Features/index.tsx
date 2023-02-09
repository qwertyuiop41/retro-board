import Box from '../../../common/components/Box';
import Heading from '../../../common/components/Heading';
import Image from '../../../common/components/Image';
import Text from '../../../common/components/Text';
import Container from '../../../common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import FeatureArea from './features.style';
const Features = () => {
  const Data = useStaticQuery(graphql`
    query {
      webAppJson {
        FEATURE_DATA {
          blockTitle {
            title
            text
          }
          post {
            icon {
              publicURL
            }
            text
          }
        }
      }
    }
  `);
  const { blockTitle, post } = Data.webAppJson.FEATURE_DATA;
  const { title, text } = blockTitle;
  return (
    <FeatureArea id="feature_section">
      <Container>
        <Box className="blockTitle">
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
        </Box>
        <Box className="postWrap">
          {post.map(({ icon, text }, index) => (
            <Box className="post" key={`feature-post-key-${index}`}>
              <div className="feature-image-box">
                <div className="feature-image-box-inner">
                  <Image src={icon.publicURL} alt="" />
                </div>
              </div>
              <Heading as="h3" content={text} />
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureArea>
  );
};

export default Features;
