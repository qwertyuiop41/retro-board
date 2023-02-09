import Box from '../../../common/components/Box';
import Heading from '../../../common/components/Heading';
import Image from '../../../common/components/Image';
import Text from '../../../common/components/Text';
import Container from '../../../common/components/UI/Container';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/ionicons/chevronRight';
import Swiper from 'react-id-swiper';
import 'swiper/css';
import BlogArea from './blog.style';
const Blog = () => {
  const Data = useStaticQuery(graphql`
    query {
      webAppJson {
        BLOG_DATA {
          blockText {
            title
            text
          }
          posts {
            image {
              publicURL
            }
            title
            link {
              path
              label
            }
          }
        }
      }
    }
  `);
  const { blockText, posts } = Data.webAppJson.BLOG_DATA;
  const { title, text } = blockText;
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <BlogArea id="blog_section">
      <Container>
        <Box className="blockTitle">
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
        </Box>
        <Swiper {...params}>
          {posts.map(({ image, title, link }, index) => (
            <Box as="div" key={`blog-post-${index}`}>
              <Box className="blogPost">
                <Box className="blogImage">
                  <Image src={image.publicURL} alt="blog image" />
                </Box>
                <Box className="blogContent">
                  <Heading as="h3" content={title} />
                  <Link className="blogLink" to={link.path}>
                    {link.label}
                    <Icon icon={chevronRight} size={12} />
                  </Link>
                </Box>
              </Box>
            </Box>
          ))}
        </Swiper>
      </Container>
    </BlogArea>
  );
};

export default Blog;
