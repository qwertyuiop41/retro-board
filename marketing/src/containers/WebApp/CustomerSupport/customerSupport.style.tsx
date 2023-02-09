import themeGet from '@styled-system/theme-get';
import bgImage from '../../../common/assets/image/webApp/customer-support-bg.png';
import styled from 'styled-components';

const CustomerSupportArea = styled.section`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: top right;
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: 1600px) {
    padding-top: 70px;
    padding-bottom: 80px;
  }
  .blockTitle {
    text-align: center;
    max-width: 658px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 80px;
    @media (max-width: 1600px) {
      margin-bottom: 60px;
      max-width: 532px;
    }
    @media (max-width: 375px) {
      margin-bottom: 40px;
    }
    h2 {
      margin: 0;
      font-weight: 500;
      font-size: 40px;
      line-height: 1.37;
      text-align: center;
      letter-spacing: -0.02em;
      color: #ffffff;
      @media (max-width: 1600px) {
        font-size: 30px;
        line-height: 1.5;
      }
      @media (max-width: 375px) {
        font-size: 22px;
      }
    }
  }
  .image {
    flex: 0 0 50%;
    position: relative;
    @media (max-width: 768px) {
      flex: 0 0 100%;
      margin-bottom: 50px;
    }
    img {
      position: relative;
      z-index: 10;
    }
    .shapeImage {
      position: absolute;
      bottom: -90px;
      left: -145px;
      opacity: 0.1;
    }
  }
  .content {
    flex: 0 0 50%;
    padding-left: 70px;
    display: flex;
    @media (max-width: 1600px) {
      padding-left: 50px;
    }
    @media (max-width: 768px) {
      padding-left: 0;
      flex: 0 0 100%;
    }
  }
  .contentInner {
    margin-top: auto;
    margin-bottom: auto;
    z-index: 1;
  }
  .options {
    @media (max-width: 768px) {
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 480px) {
      max-width: 100%;
    }
  }
  .optionsItem {
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
    position: relative;
    padding-left: 40px;
    + .optionsItem {
      margin-top: 20px;
      @media (max-width: 1600px) {
        margin-top: 15px;
      }
    }
    > i {
      position: absolute;
      color: #3fdbb1;
      top: 0;
      left: 0;
    }
    @media (max-width: 1600px) {
      font-size: 17px;
    }
  }
  .button {
    margin-top: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    font-weight: 700;
    color: #fff;
    font-size: 14px;
    position: relative;
    padding: 16px 25px;
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
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      transition: opacity 0.4s ease;
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
    i {
      margin-left: 10px;
      position: relative;
      top: -1px;
      transition: transform 0.4s ease;
    }
    span {
      position: relative;
      display: flex;
      z-index: 2;
    }
    @media (max-width: 1600px) {
      margin-top: 30px;
    }
    @media (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
      max-width: 160px;
      display: block;
    }
  }
`;

export default CustomerSupportArea;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
