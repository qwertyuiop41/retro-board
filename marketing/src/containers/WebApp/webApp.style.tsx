import { themeGet } from '@styled-system/theme-get';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const Pulse_Grow = keyframes`
  to {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
`;

const DashboardFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-15%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Hvr_Ripple_Out = keyframes`
  100% {
    top: -12px;
    right: -12px;
    bottom: -12px;
    left: -12px;
    opacity: 0;
  }
`;

const shake = keyframes`
  16%{
      transform:skew(-14deg)
  }
  33%{
      transform:skew(12deg)
  }
  49%{
      transform:skew(-8deg)
  }
  66%{
      transform:skew(6deg)
  }
  83%{
      transform:skew(-4deg)
  }
`;

const Wobble_Vertical = keyframes`
  16.65% {
    transform: translateY(8px);
  }
  33.3% {
    transform: translateY(-6px);
  }
  49.95% {
    transform: translateY(4px);
  }
  66.6% {
    transform: translateY(-2px);
  }
  83.25% {
    transform: translateY(1px);
  }
  100% {
    transform: translateY(0);
  }
`;

const GlobalStyle = createGlobalStyle`
  :root {
    --DashboardFadeIn: ${DashboardFadeIn};
    --HvrRippleOut: ${Hvr_Ripple_Out} 1s ease-in-out;
    --shakeAnim: ${shake} 600ms ease-in-out;
    --wobbleVertical: ${Wobble_Vertical} 1s ease-in-out;
    --pulse: ${Pulse_Grow} 3800ms linear infinite alternate;
    --pulseDelay: 0ms;
  }
  body {
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'DM Sans', sans-serif;
    /* font-family: 'Work Sans', sans-serif; */
  }
  p:last-of-type {
    margin-bottom: 0;
  }
  section {
    position: relative;
  }
  .reusecore__button {
    font-weight: 500;
  }
  .container {
    max-width: 1360px;
    @media only screen and (max-width: 1600px) {
      max-width: 1170px;
      padding-left: 0;
      padding-right: 0;
    }
    @media(max-width: 1199px) {
      padding-left: 40px;
      padding-right: 40px;
    }
    @media only screen and (max-width: 667px) {
      width: 100%;
    }
    @media only screen and (max-width: 667px) {
      padding-left: 20px;
      padding-right: 20px;
    }
    @media only screen and (width: 375px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  .stricky-logo {
    display: none;
  }
  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: #343d48;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: ${themeGet('colors.secondary')};
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: ${themeGet('colors.secondary')};
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: ${themeGet('colors.secondary')};
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: ${themeGet('colors.secondary')};
        transform: rotate(45deg);
        display: block;
      }
    }
  }


  .sticky-nav-active {
    .sassminimal_navbar {
      background: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 15px 0;
      .main-logo {
        display: none;
      }
      .stricky-logo {
        display: block;
      }
      .main_menu li a {
        color: #0F2137;
      }
      .main_menu li:hover a,
      .main_menu li.is-current a {
        color: #FF766E;
      }
      .reusecore-drawer__handler {
        .hamburgMenu__bar {
          > span {
            background-color: #0F2137;
          }
        }
      }
      .navbar_button button {
        color: #0F2137;
        border-color: #0F2137;
        outline: none;
        &:hover {
          color: #FF766E;
          border-color: #FF766E;
        }
      }
      .navbar_button_two button {
        color: #fff;
        background-color: #0F2137;
        &:hover {
          color: #fff;
          background-color: #FF766E;
          border-color: #FF766E;
        }
      }
    }
  }

  .sassminimal_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;

    .main-logo {
      display: block;
    }
    .stricky-logo {
      display: none;
    }
    .mainMenuWrapper {
      flex: 1 1 100%;

      @media (max-width: 991px) {
        flex: 0 0 auto;
        margin-left: auto;
      }

    }
    .main_menu {
      margin-left: 45px;
      li {
        display: inline-block;
        padding-left: 13px;
        padding-right: 13px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: #0F2137;
          }
        }
        a {
          padding: 5px;
          transition: 0.15s ease-in-out;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          color: #ffffff;
          &:hover {
            color: #0F2137;
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button {
      margin-left: auto;

      button {
        background-color: transparent;
        color: #fff;
        font-size: 15px;
        font-weight: bold;
        padding: 0;
        border-radius: 0;
        border: none;
        box-shadow: none !important;
        padding-bottom: 6px;
        border-bottom: 1px solid rgba(255,255,255,.6);
        transition: all 500ms ease;
        &:hover {
          color: #0F2137;
          border-bottom-color: #0F2137;
        }
      }

      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button_two {
      margin-left: 30px;
      button {
        background-color: #fff;
        border-color: #fff;
        color: #FF766E;
        font-size: 15px;
        font-weight: bold;
        border-radius: 22.5px;
        transition: all 500ms ease;
        &:hover {
          background-color: #0F2137;
          border-color: #0F2137;
          color: #fff;
        }
      }

      @media (max-width: 990px) {
        display: none;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
          background-color: #fff;
        }
      }
    }
  }

`;

export const AppWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .sticky-active {
    .navbar {
      padding: 20px 0 21px;
      background-color: ${themeGet('colors.white', '#ffffff')};
      @media only screen and (max-width: 1366px) {
        padding: 15px 0 16px;
      }
      .mobile-menu {
        top: 72px;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  flex: 1 0 auto;
  width: 100%;
  overflow: hidden;
`;

export const SectionHeader = styled.header`
  max-width: 550px;
  width: 100%;
  margin: 0 auto 85px;
  text-align: center;
  @media only screen and (max-width: 1600px) {
    margin-bottom: 60px;
  }
  p {
    font-size: 16px;
    font-weight: normal;
    line-height: 2;
    margin-bottom: 12px;
    color: ${themeGet('colors.textColor', '#343D48')};
    @media only screen and (max-width: 991px) {
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
  h2 {
    font-size: 28px;
    line-height: 1.3;
    font-weight: 500;
    color: ${themeGet('colors.headingColor', '#0F2137')};
    margin-bottom: 18px;
    letter-spacing: -0.5px;
    @media only screen and (max-width: 1600px) {
      font-size: 24px;
      letter-spacing: -0.7px;
      margin-bottom: 12px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 22px;
      line-height: 38px;
      letter-spacing: -0.5px;
    }
  }
  &.section-header-two {
    text-align: left;
    margin-top: -10px;
    margin-bottom: 40px;
    h2 {
      font-size: 40px;
      line-height: 1.35;
      margin-bottom: 25px;
      letter-spacing: -0.5px;
      @media (max-width: 1600px) {
        font-size: 32px;
      }
      @media (max-width: 575px) {
        font-size: 22px;
      }
    }
  }
`;

export const GradientWrapper = styled.section`
  flex: 1 0 auto;
  width: 100%;
  overflow: hidden;
  background-image: linear-gradient(
    180deg,
    rgba(246, 247, 249, 0) 0%,
    #f3f7fb 36.35%
  );
`;
export default GlobalStyle;
