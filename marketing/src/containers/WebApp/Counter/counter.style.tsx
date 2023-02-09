import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';

const CounterArea = styled.section`
  padding-top: 150px;
  padding-bottom: 165px;
  @media (max-width: 1600px) {
    padding-top: 100px;
    padding-bottom: 115px;
  }
  @media (max-width: 375px) {
    padding-top: 70px;
    padding-bottom: 95px;
  }
  .blockTitle {
    flex: 0 0 50%;
    @media (max-width: 768px) {
      flex: 0 0 100%;
      padding-top: 50px;
      max-width: 75%;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
    @media (max-width: 480px) {
      max-width: 100%;
      text-align: center;
    }
    h2 {
      font-weight: 500;
      font-size: 40px;
      line-height: 1.37;
      letter-spacing: -0.02em;
      color: #0f2137;
      margin: 0;
      max-width: 505px;
      @media (max-width: 1600px) {
        font-size: 32px;
        line-height: 1.41;
        max-width: 413px;
      }
      @media (max-width: 768px) {
        max-width: 100%;
      }
      @media (max-width: 375px) {
        font-size: 22px;
      }
    }
    p {
      margin: 0;
      font-weight: normal;
      font-size: 16px;
      line-height: 2;
      color: #0f2137;
      max-width: 553px;
      margin-top: 30px;
      margin-bottom: 30px;
      @media (max-width: 1600px) {
        font-size: 15px;
        line-height: 1.87;
        max-width: 465px;
      }
      @media (max-width: 768px) {
        max-width: 100%;
      }
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      font-weight: 700;
      color: #fff;
      font-size: 16px;
      position: relative;
      padding: 19.5px 29px;
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
      i {
        margin-left: 10px;
        position: relative;
        top: -1px;
        transition: transform .4s ease;
      }
      span {
        position: relative;
        display: flex;
        z-index: 2;
      }
    }
  }

  .postsWrap {
    flex: 0 0 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex: 0 0 100%;
      max-width: 79%;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 480px) {
      max-width: 100%;
    }
  }
  .post {
    width: calc(50% - 12.5px);
    padding: 50px 40px;
    background: #fff;
    box-shadow: 0px 4px 6px rgba(132, 159, 184, 0.15);
    border-radius: 10px;
    margin-bottom: 25px;
    @media (max-width: 768px) {
      width: calc(50% - 20px);
    }
    @media (max-width: 425px) {
      padding: 30px;
      width: calc(50% - 12.5px);
    }
    p {
      margin: 0;
      font-size: 18px;
      color: #0f2137;
      line-height: 1;
      @media (max-width: 1600px) {
        font-size: 17px;
      }
      @media (max-width: 375px) {
        font-size: 15px;
      }
    }
    @media (min-width: 769px) {
      &:nth-of-type(2) {
        position: relative;
        top: 40px;
      }
      &:nth-of-type(4) {
        position: relative;
        top: 40px;
      }
      &:nth-of-type(3) {
        .postCount {
          align-items: baseline;
          span {
            top: 0;
          }
        }
      }
    }
    transition: transform .4s ease;
    &:hover {
      transform: translateY(-5px);
    }
  }
  .postCount {
    display: flex;
    align-items: flex-start;
    margin-top: 5px;
    margin-bottom: 5px;
    h3 {
      margin: 0;
      font-size: 80px;
      line-height: 1;
      letter-spacing: -0.02em;
      color: #ff8d6f;
      font-weight: 400;
      @media (max-width: 1600px) {
        font-size: 70px;
      }
      @media (max-width: 768px) {
        font-size: 60px;
      }
      @media (max-width: 375px) {
        font-size: 48px;
      }
    }
    span {
      margin: 0;
      font-weight: 500;
      font-size: 40px;
      line-height: 1;
      letter-spacing: -0.02em;
      color: #ff8d6f;
      position: relative;
      top: 5px;
      margin-left: 5px;
      @media (max-width: 375px) {
        font-size: 30px;
      }
    }
  }
`;
export default CounterArea;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
