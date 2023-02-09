import Heading from '../../../common/components/Heading';
import Image from '../../../common/components/Image';
import Text from '../../../common/components/Text';
import Container from '../../../common/components/UI/Container';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import CallToActionArea from './calltoaction.style';

const CallToAction = () => {
  const Data = useStaticQuery(graphql`
    query {
      webAppJson {
        CALL_TO_ACTION_DATA {
          title
          text
          button {
            label
            link
          }
          bubbleIcon {
            icon {
              publicURL
            }
          }
        }
      }
    }
  `);
  const { title, text, button, bubbleIcon } =
    Data.webAppJson.CALL_TO_ACTION_DATA;
  return (
    <CallToActionArea>
      {bubbleIcon.map(({ icon }, index) => (
        <Image
          alt="bubble-icon"
          className={`callToAction-bubble-${index + 1}`}
          key={`bubble-icon-${index}`}
          src={icon.publicURL}
        />
      ))}
      <Container>
        <Heading as="h3" content={title} />
        <Text as="p" content={text} />
        <Link className="button" to={button.link}>
          <span>
            {button.label}
            <Icon icon={androidArrowForward} size={16} />
          </span>
        </Link>
      </Container>
    </CallToActionArea>
  );
};

export default CallToAction;
