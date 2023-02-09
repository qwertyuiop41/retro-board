import Box from '../../../common/components/Box';
import Heading from '../../../common/components/Heading';
import Image from '../../../common/components/Image';
import Container from '../../../common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Carousel from './carousel';
import TestimonialsArea from './testimonials.style';
const Testimonials = () => {
  const Data = useStaticQuery(graphql`
    query {
      webAppJson {
        TESTIMONIALS_DATA {
          blockImage {
            publicURL
          }
          title
          posts {
            text
            name
            designation
            image {
              publicURL
            }
          }
        }
      }
    }
  `);
  const { blockImage, title, posts } = Data.webAppJson.TESTIMONIALS_DATA;
  return (
    <TestimonialsArea>
      <Container>
        <Box className="blockTitle">
          <Image src={blockImage.publicURL} alt="shape image" />
          <Heading as="h2" content={title} />
        </Box>
        <Carousel data={posts} />
      </Container>
    </TestimonialsArea>
  );
};

export default Testimonials;
