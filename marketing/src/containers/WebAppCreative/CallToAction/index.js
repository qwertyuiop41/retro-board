import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowDropdown } from 'react-icons-kit/ionicons/androidArrowDropdown';
import Container from 'common/components/UI/Container';
// import Button from 'common/components/Button';
import { Button, MenuItem } from 'react-aria-menubutton';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section, { Content, DownloadButton, DownloadOptions } from './cta.style';
import bubble1 from 'common/assets/image/webAppCreative/cta-bubble-1.png';
import bubble2 from 'common/assets/image/webAppCreative/cta-bubble-2.png';

const menuItemWords = ['Download for MacOS', 'Download for Windows x64'];

const CallToAction = () => {
  const [downloadFor, setDownloadFor] = useState('Download for MacOS');
  const handleSelection = (value, event) => {
    setDownloadFor(value);
  };
  return (
    <Section>
      <img src={bubble1?.src} className="bubble-1" alt="bubble1" />
      <Container width="1400px">
        <Content>
          <Heading content="Start making business with our software" />
          <Text content="Best free time tracking software. It's a simple time tracker and time sheet app that lets you and your team track work hours" />
          <DownloadButton onSelection={handleSelection}>
            <Button className="MyMenuButton-button">
              {downloadFor}
              <Icon icon={androidArrowDropdown} />
            </Button>
            <DownloadOptions>
              <ul>
                {menuItemWords.map((word, i) => {
                  return (
                    <li key={i}>
                      <MenuItem className="MyMenuButton-menuItem">
                        {word}
                      </MenuItem>
                    </li>
                  );
                })}
              </ul>
            </DownloadOptions>
          </DownloadButton>
          <span>
            <Link href="#">2,500+ Upvote on ProductHunt</Link>
          </span>
        </Content>
      </Container>
      <img src={bubble2?.src} className="bubble-2" alt="bubble2" />
    </Section>
  );
};

export default CallToAction;
