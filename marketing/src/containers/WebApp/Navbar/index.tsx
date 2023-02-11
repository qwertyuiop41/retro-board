import LogoImageStick from '../../../common/assets/image/webApp/header-logo-stick.svg';
import LogoImage from '../../../common/assets/image/webApp/header-logo.svg';
import Box from '../../../common/components/Box';
import Button from '../../../common/components/Button';
import Drawer from '../../../common/components/Drawer';
import HamburgMenu from '../../../common/components/HamburgMenu';
import NavbarWrapper from '../../../common/components/Navbar';
import ScrollSpyMenu from '../../../common/components/ScrollSpyMenu';
import Container from '../../../common/components/UI/Container';
import Logo from '../../../common/components/UIElements/Logo';
import { DrawerContext } from '../../../common/contexts/DrawerContext';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const { t } = useTranslation();
  const menuItems = t('MenuItems', { returnObjects: true });
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Box {...row}>
          <Logo
            href="#"
            logoSrc={LogoImage}
            title="Agency"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="#"
            logoSrc={LogoImageStick}
            title="Agency"
            logoStyle={logoStyle}
            className="stricky-logo"
          />
          <Box {...menuWrapper} className="mainMenuWrapper">
            <ScrollSpyMenu
              className="main_menu"
              menuItems={menuItems}
              offset={-70}
            />
            <Link className="navbar_button" to="#">
              <Button {...button} title="Login Now" />
            </Link>
            <Link className="navbar_button_two" to="#">
              <Button {...button} title="Join Free" />
            </Link>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#ff5f6d" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={menuItems}
                drawerClose={true}
                offset={-100}
              />
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    className: 'sassminimal_navbar',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['126px', '126px'],
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'primaryWithBg',
    minHeight: 'auto',
    height: `${1}`,
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
