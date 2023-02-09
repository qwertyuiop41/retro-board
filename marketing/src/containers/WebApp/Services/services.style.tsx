import styled from 'styled-components';
const ServicesArea = styled.section`
  background-color: #f7fafa;
  @media (max-width: 768px) {
    padding-top: 30px;
  }
  .container {
    max-width: 1000px;
  }
  .servicePost {
    display: flex;
    margin-top: 70px;
    @media (max-width: 768px) {
      margin-top: 40px;
    }
    > img {
      flex-shrink: 0;
      width: 70px;
      height: 70px;
    }
    .content {
      margin-left: 20px;
      h3 {
        margin: 0;
        font-weight: bold;
        font-size: 18px;
        line-height: 1.27;
        color: #0f2137;
        margin-bottom: 10px;
        @media (max-width: 425px) {
          font-size: 16px;
        }
      }
      p {
        font-weight: normal;
        font-size: 15px;
        line-height: 1.87;
        color: #343d48;
        margin: 0;
      }
    }
    &:hover {
      .service-icon {
        animation: var(--shakeAnim);
      }
    }
  }
  .service-icon {
    --width: 70px;
    width: var(--width);
    flex: 0 0 var(--width)
  }
`;
export default ServicesArea;

export const Row = styled.div`
  margin-left: -44px;
  margin-right: -44px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1199px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 768px) {
    margin-left: -15px;
    margin-right: -15px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (max-width: 480px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
export const Col = styled.div`
  padding-left: 44px;
  padding-right: 44px;
  flex: 0 0 50%;
  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (max-width: 575px) {
    flex: 0 0 100%;
  }
`;
