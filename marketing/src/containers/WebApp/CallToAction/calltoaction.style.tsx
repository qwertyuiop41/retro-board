import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';

const CallToActionArea = styled.section`
  position: relative;
  padding-bottom: 280px;
  padding-top: 330px;
  @media (max-width: 1600px) {
    padding-top: 240px;
    padding-bottom: 230px;
  }
  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 100px;
  }
  @media (max-width: 575px) {
    padding-top: 40px;
    padding-bottom: 70px;
  }
  @media (max-width: 375px) {
    padding-top: 50px;
  }
  [class*='callToAction-bubble-'] {
    position: absolute;
    animation: var(--pulse);
    animation-delay: var(--pulseDelay);
    @media (max-width: 1600px) {
      transform: scale(0.7);
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  .callToAction-bubble-1 {
    left: 185px;
    top: 160px;
    --pulseDelay: 100ms;
    @media (max-width: 1600px) {
      top: 90px;
      left: 90px;
    }
  }
  .callToAction-bubble-2 {
    left: 0px;
    top: 550px;
    --pulseDelay: 400sm;
    @media (max-width: 1600px) {
      top: auto;
      bottom: 135px;
    }
  }
  .callToAction-bubble-3 {
    right: 440px;
    top: 172px;
    --pulseDelay: 1000ms;
    @media (max-width: 1600px) {
      top: 90px;
      right: 315px;
    }
    @media (max-width: 1199px) {
      display: none;
    }
  }
  .callToAction-bubble-4 {
    right: 75px;
    bottom: 238px;
    --pulseDelay: 1200ms;
    @media (max-width: 1600px) {
      bottom: 170px;
      right: 90px;
    }
  }
  .callToAction-bubble-5 {
    right: 555px;
    bottom: 126px;
    --pulseDelay: 800ms;
    @media (max-width: 1600px) {
      bottom: 80px;
      right: 375px;
    }
    @media (max-width: 1199px) {
      display: none;
    }
  }
  .callToAction-bubble-6 {
    right: 0px;
    top: 185px;
    --pulseDelay: 1500ms;
    @media (max-width: 1600px) {
      top: 115px;
      transform-origin: right;
    }
  }
  .callToAction-bubble-7 {
    left: 360px;
    top: 395px;
    --pulseDelay: 600ms;
    @media (max-width: 1600px) {
      left: 220px;
      top: 357px;
    }
    @media (max-width: 1199px) {
      display: none;
    }
  }
  .container {
    text-align: center;
  }
  h3 {
    margin: 0;
    color: #0f2137;
    font-size: 44px;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.02em;
    @media (max-width: 1600px) {
      font-size: 34px;
    }
    @media (max-width: 375px) {
      font-size: 24px;
    }
  }
  p {
    font-size: 17px;
    line-height: 2.12;
    text-align: center;
    color: #0f2137;
    margin: 0;
    max-width: 651px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    @media (max-width: 1600px) {
      font-size: 16px;
      line-height: 2.25;
      max-width: 620px;
    }
    @media (max-width: 375px) {
      font-size: 15px;
      line-height: 1.85;
    }
  }
  .button {
    margin-top: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    font-weight: 700;
    color: #fff;
    padding: 24.5px 29px;
    font-size: 16px;
    position: relative;
    @media (max-width: 375px) {
      margin-top: 20px;
    }
    i {
      margin-left: 10px;
      transition: transform .4s ease;
    }
    span {
      position: relative;
      display: flex;
      z-index: 3;
    }
    @media (max-width: 1600px) {
      font-size: 15px;
      padding: 22.5px 29px;
    }
    &:hover {
      &:before {
        opacity: 0;
      }
      span {
        i {
          transform: translateX(2px);
        }
      }
    }
    &:after,
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      transition: opacity .4s ease;
    }
    &:before {
      background-image: linear-gradient(
        173.72deg,
        ${themeGet('colors.gradientPrimary')} -338.12%,
        ${themeGet('colors.gradientSecondary')} 190.2%
      );
    }
    &:after {
      background-image: linear-gradient(
        135.72deg,
        ${themeGet('colors.gradientSecondary')} 0%,
        ${themeGet('colors.gradientPrimary')} 130.2%
      );
      z-index: -1;
    }
  }
`;
export default CallToActionArea;
