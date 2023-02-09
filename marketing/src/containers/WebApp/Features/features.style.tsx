import styled from 'styled-components';

const FeatureArea = styled.section`
  padding-bottom: 365px;
  padding-top: 90px;
  @media (max-width: 1600px) {
    padding-top: 60px;
  }
  @media (max-width: 768px) {
    padding-bottom: 275px;
  }
  @media (max-width: 375px) {
    padding-top: 40px;
    padding-bottom: 255px;
  }
  .blockTitle {
    text-align: center;
    max-width: 577px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 70px;
    @media (max-width: 1600px) {
      margin-bottom: 40px;
    }
    h2 {
      font-weight: bold;
      font-size: 36px;
      line-height: 1.31;
      letter-spacing: -0.5px;
      color: #0f2137;
      margin: 0;
      margin-bottom: 15px;
      @media (max-width: 1600px) {
        font-size: 30px;
        line-height: 1.3;
        max-width: 468px;
        margin-left: auto;
        margin-right: auto;
      }
      @media (max-width: 768px) {
        font-size: 28px;
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
      @media (max-width: 768px) {
        font-size: 15px;
      }
    }
  }
  .postWrap {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
  .post {
    flex: 0 0 20%;
    text-align: center;
    @media (max-width: 768px) {
      flex: 0 0 28%;
      margin-bottom: 50px;
    }
    @media (max-width: 425px) {
      flex: 1 1 50%;
    }
    img {
      margin-left: auto;
      margin-right: auto;
    }
    h3 {
      font-weight: 500;
      font-size: 17px;
      line-height: 1;
      text-align: center;
      color: #0f2137;
      margin: 0;
      margin-top: 30px;
      @media (max-width: 1600px) {
        font-size: 16px;
      }
    }
    cursor: pointer;
    &:hover {
      .feature-image-box-inner {
        transform: translateY(-5px);
        &:before {
          opacity: 1;
          transform: translateY(5px);
        }
      }
    }
  }
  .feature-image-box-inner {
    transition: all .4s ease;
    display: inline-flex;
    &:before {
      pointer-events: none;
      position: absolute;
      z-index: -1;
      content: '';
      top: 100%;
      left: 5%;
      height: 10px;
      width: 90%;
      opacity: 0;
      background: radial-gradient(ellipse at center, rgba(132, 159, 184, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
      transition-duration: 0.3s;
      transition-property: transform, opacity;
    }
  }
`;

export default FeatureArea;
