import Box from '../../../common/components/Box';
import Image from '../../../common/components/Image';
import Text from '../../../common/components/Text';
import Container from '../../../common/components/UI/Container';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import FooterArea from './footer.style';

const Footer = () => {
  const Data = useStaticQuery(graphql`
    query {
      webAppJson {
        FOOTER_DATA {
          logo {
            publicURL
          }
          menu {
            link
            label
          }
          social {
            icon {
              publicURL
            }
            link
          }
        }
      }
    }
  `);
  const { logo, menu, social } = Data.webAppJson.FOOTER_DATA;
  return (
    <FooterArea>
      <Container>
        <Box className="logoBox">
          <Link className="logo" to="/webapp">
            <Image src={logo.publicURL} alt="logo footer" />
          </Link>
          <Text as="p" content={`Copyright © ${new Date().getFullYear()}`} />
          <Link className="footerLink" to="/">
            RedQ, Inc.
          </Link>
        </Box>
        <Box className="menu">
          {menu.map(({ link, label }, index) => (
            <Link
              className="menuLink"
              to={link}
              key={`footer-menu-link-${index}`}
            >
              {label}
            </Link>
          ))}
        </Box>
        <Box className="social">
          <Text as="span" content="Social:" />
          {social.map(({ icon, link }, index) => (
            <Link
              className="socialLink"
              to={link}
              key={`footer-social-link-${index}`}
            >
              <Image src={icon.publicURL} alt="social icon" />
            </Link>
          ))}
        </Box>
      </Container>
    </FooterArea>
  );
};

export default Footer;
