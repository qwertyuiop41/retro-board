import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_place } from 'react-icons-kit/md/ic_place';
import { ic_phone } from 'react-icons-kit/md/ic_phone';
import { paperPlane } from 'react-icons-kit/fa/paperPlane';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import {
  Section,
  Grid,
  AboutUs,
  FooterWidget,
  ContactInfo,
  InfoItem,
  FooterBottom,
  FooterNav,
  SocialLinks,
} from './footer.style';
import { footerTop, footer } from 'common/data/WebAppCreative';

const Footer = () => {
  return (
    <Section>
      <Container width="1400px">
        <Grid>
          <AboutUs>
            <Image src={footerTop.about.logo?.src} alt="Web App Creative" />
            <Text content={footerTop.about.text} />
          </AboutUs>
          {footerTop.widgets.map((item) => (
            <FooterWidget key={item.id}>
              <h4>{item.title}</h4>
              <ul>
                {item.list.map((item) => (
                  <li className="widgetListItem" key={item.id}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </FooterWidget>
          ))}
          <ContactInfo>
            <Heading as="h4" content={footerTop.contactInfo.title} />
            <InfoItem>
              <Icon icon={ic_place} size={24} />
              <Text content={footerTop.contactInfo.address} />
            </InfoItem>
            <InfoItem>
              <Icon icon={ic_phone} size={26} className="phone-icon" />
              <div>
                <Text
                  className="phone-number"
                  content={footerTop.contactInfo.phone}
                />
                <Text content={footerTop.contactInfo.openingTime} />
              </div>
            </InfoItem>
            <InfoItem>
              <Icon icon={paperPlane} size={22} />
              <Text content={footerTop.contactInfo.email} />
            </InfoItem>
          </ContactInfo>
        </Grid>
      </Container>
      <Container width="1400px">
        <FooterBottom>
          <Text content={footer.copyright} />
          <FooterNav>
            {footer.nav.map((item) => (
              <li key={item.id}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </FooterNav>
          <SocialLinks>
            <span>Social:</span>
            <ul>
              {footer.socialLinks.map((item) => (
                <li key={item.id}>
                  <Link href={item.link}>
                    <img src={item.icon?.src} alt={item.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </SocialLinks>
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
