import themeGet from '@styled-system/theme-get';
import BannerBg from '../../../common/assets/image/webApp/banner-bg.png';
import styled from 'styled-components';
const BannerArea = styled.section`
  padding-top: 270px;
  padding-bottom: 305px;
  position: relative;
  @media (max-width: 1600px) {
    padding-top: 210px;
    padding-bottom: 230px;
  }
  @media (max-width: 1024px) {
    padding-top: 150px;
    padding-bottom: 180px;
    background-position: center center;
  }
  @media (max-width: 768px) {
    padding-top: 110px;
    padding-bottom: 140px;
  }
  @media (min-width: 768px) {
    background-image: url(${BannerBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom left;
  }
  @media (max-width: 767px) {
    padding-bottom: 0px;
    background: linear-gradient(
      131.39deg,
      ${themeGet('colors.gradientSecondary')} -9.09%,
      ${themeGet('colors.gradientPrimary')} 129.67%
    );
  }
  .Container {
    display: flex;
    position: relative;
    z-index: 10;
  }
  h2 {
    font-weight: 500;
    font-size: 62px;
    line-height: 1.21;
    letter-spacing: -2px;
    color: #ffffff;
    margin-bottom: 20px;
    @media (max-width: 1600px) {
      font-size: 40px;
      max-width: 414px;
    }
    @media (max-width: 768px) {
      font-size: 35px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      max-width: 421px;
    }
    @media (max-width: 574px) {
      font-size: 30px;
      max-width: 100%;
      line-height: 40px;
      letter-spacing: normal;
    }
  }
  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 2.11;
    letter-spacing: -0.3px;
    color: #ffffff;
    margin-bottom: 0;
    max-width: 515px;
    opacity: 0.8;
    @media (max-width: 1600px) {
      font-size: 16px;
      max-width: 466px;
    }
    @media (max-width: 1024px) {
      max-width: 400px;
    }
    @media (max-width: 768px) {
      max-width: 440px;
      margin-left: auto;
      text-align: center;
      margin-right: auto;
    }
  }
  .ButtonWrap {
    display: flex;
    margin-top: 35px;
    align-items: center;
    @media (max-width: 1600px) {
      margin-top: 20px;
    }
    @media (max-width: 768px) {
      justify-content: center;
    }
    @media (max-width: 575px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    span {
      font-weight: 500;
      font-size: 15px;
      color: #ffffff;
      opacity: 0.6;
      line-height: 1;
      margin-bottom: 0;
      margin-left: 25px;
      @media (max-width: 1600px) {
        font-size: 14px;
      }
      @media (max-width: 768px) {
        margin-left: 15px;
      }
      @media (max-width: 575px) {
        margin-left: 0;
        margin-top: 10px;
      }
    }
  }
  .Button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    line-height: 1;
    color: #ffffff;
    padding: 21px 29px;
    background-color: #23374d;
    transition: all 500ms ease;
    &:hover {
      background-color: #fff;
      color: #23374d;
      i {
        transform: translateX(2px);
      }
    }
    i {
      margin-left: 10px;
      position: relative;
      top: 1px;
      transition: transform 0.4s ease;
    }
    @media (max-width: 1600px) {
      font-size: 14px;
      padding: 16px 23px;
    }
    @media (max-width: 575px) {
      width: 100%;
    }
  }
  .bannerImage {
    position: absolute;
    top: 120px;
    right: 0;
    display: flex;
    align-items: center;
    @media (max-width: 1600px) {
      top: 50px;
      img {
        transform: scale(0.85);
        transform-origin: right center;
      }
    }
    @media (max-width: 1300px) {
      top: 100px;
      max-width: 60%;
    }
    @media (max-width: 1024px) {
      top: 0;
      max-width: 85%;
      img {
        transform: scale(0.6);
        transform-origin: right center;
      }
    }
    @media (max-width: 768px) {
      max-width: 100%;
      position: relative;
      top: auto;
      right: auto;
      margin-top: 40px;
      img {
        transform: scale(1);
        transform-origin: center center;
      }
    }
  }
`;

export default BannerArea;

export const Col = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
