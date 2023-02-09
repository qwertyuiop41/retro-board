import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';

const FooterArea = styled.footer`
  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-top: 1px solid #dfe4ed;
    padding-top: 35px;
    padding-bottom: 50px;
    justify-content: space-between;
    @media (max-width: 1600px) {
      padding-bottom: 40px;
    }
    @media (max-width: 991px) {
      flex-direction: column;
    }
  }
  .logoBox {
    display: flex;
    align-items: center;
    @media (max-width: 425px) {
      flex-wrap: wrap;
      justify-content: center;
    }
    .logo {
      @media (max-width: 425px) {
        flex: 0 0 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 15px;
      }
    }
    p {
      margin: 0;
      color: #09131f;
      margin-left: 15px;
      margin-right: 5px;
      @media (max-width: 1600px) {
        font-size: 15px;
      }
    }
  }
  .footerLink {
    line-height: 1;
    color: ${themeGet('colors.primary')};
    font-size: 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid currentColor;
  }
  .menu {
    display: flex;
    align-items: center;
    @media (max-width: 991px) {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    a {
      font-size: 15px;
      line-height: 1;
      color: #0f2137;
      transition: all 500ms ease;
      &:hover {
        color: ${themeGet('colors.primary')};
      }
      + a {
        margin-left: 35px;
      }
    }
  }
  .social {
    display: flex;
    align-items: center;
    span {
      color: #0f2137;
      line-height: 1;
      margin-bottom: 0;
      font-size: 15px;
      display: block;
    }
    a {
      margin-left: 15px;
      transition: opacity 0.4s ease;
      &:hover {
        opacity: .8;
      }
    }
  }
`;
export default FooterArea;
