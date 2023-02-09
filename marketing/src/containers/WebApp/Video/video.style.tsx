import { themeGet } from '@styled-system/theme-get';
import bgImage from 'common/assets/image/webApp/video-thumb.png';
import styled from 'styled-components';

const VideoArea = styled.section`
  background-color: #f7fafa;
  .container {
    max-width: 1000px;
    position: relative;
    top: -215px;
    margin-bottom: -215px;
  }
  h2 {
    font-weight: 500;
    font-size: 36px;
    text-align: center;
    letter-spacing: -0.5px;
    color: #0f2137;
    margin: 0;
    margin-bottom: 70px;
    @media (max-width: 1600px) {
      margin-bottom: 40px;
      font-size: 30px;
    }
    @media (max-width: 375px) {
      font-size: 22px;
      margin-bottom: 25px;
    }
  }
  .videoBox {
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    min-height: 545px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    position: relative;
    z-index: 1;
    @media (max-width: 1199px) {
      max-width: 90%;
      min-height: 450px;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 768px) {
      min-height: 400px;
      background-position: right center;
    }
    @media (max-width: 450px) {
      min-height: 180px;
      .videoShape {
        display: none;
      }
    }
  }
  .videoShape-1 {
    position: absolute;
    top: 35px;
    left: -50px;
  }
  .videoShape-2 {
    position: absolute;
    bottom: 170px;
    right: -30px;
  }
  .videoShape-3 {
    position: absolute;
    bottom: 50px;
    left: -50px;
  }
  .videoBtn {
    width: 106px;
    height: 106px;
    background-image: linear-gradient(
      58.04deg,
      ${themeGet('colors.gradientSecondary')} -22.86%,
      ${themeGet('colors.gradientPrimary')} 134.18%
    );
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 450px) {
      width: 75px;
      height: 75px;
      .btn-icon {
        max-width: 50%;
      }
    }
    position: relative;
    &:before {
      content: '';
      position: absolute;
      border: ${themeGet('colors.primary')} solid 6px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      z-index: -1;
    }
    &:hover {
      &:before {
        animation: var(--HvrRippleOut);
        animation-iteration-count: infinite;
      }
    }
  }
  .video-play-button-wrapper {
    position: relative;
    z-index: 1;
  }
`;

export default VideoArea;

export const VideoWrapper = styled.div`
  max-width: 100%;
  width: 900px;
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
