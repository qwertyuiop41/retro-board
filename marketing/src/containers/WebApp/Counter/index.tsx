import Box from '../../../common/components/Box';
import Heading from '../../../common/components/Heading';
import Text from '../../../common/components/Text';
import Container from '../../../common/components/UI/Container';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import CounterArea, { Row } from './counter.style';
const Counter = () => {
  const Data = useStaticQuery(graphql`
    query {
      webAppJson {
        COUNTER_DATA {
          blockTitle {
            title
            text
            button {
              link
              label
            }
          }
          posts {
            count
            text
            title
            symbol
          }
        }
      }
    }
  `);
  const { blockTitle, posts } = Data.webAppJson.COUNTER_DATA;
  const { title, text, button } = blockTitle;
  return (
    <CounterArea>
      <Container>
        <Row>
          <Box className="blockTitle">
            <Heading as="h2" content={title} />
            <Text as="p" content={text} />
            <Link className="button" to={button.link}>
              <span>
                {button.label}
                <Icon icon={androidArrowForward} size={16} />
              </span>
            </Link>
          </Box>
          <Box className="postsWrap">
            {posts.map(({ count, text, title, symbol }, index) => (
              <Box className="post" key={`counter-post-key-${index}`}>
                <Text as="p" content={title} />
                <Box className="postCount">
                  <Heading as="h3" content={count} />
                  <Text as="span" content={symbol} />
                </Box>
                <Text as="p" content={text} />
              </Box>
            ))}
          </Box>
        </Row>
      </Container>
    </CounterArea>
  );
};

export default Counter;
