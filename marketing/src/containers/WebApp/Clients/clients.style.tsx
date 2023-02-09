import styled from 'styled-components';

const ClientsArea = styled.section`
  background-color: #f7fafa;
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 50px;
  }
  .container {
    border-top: 1px solid #e1e0eb;
    text-align: center;
  }
  h4 {
    margin: 0;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.75;
    text-align: center;
    letter-spacing: -0.015em;
    color: #696871;
    background-color: #f7fafa;
    display: inline-block;
    padding-left: 30px;
    padding-right: 30px;
    position: relative;
    top: -15px;
  }
  .imageWrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    opacity: 0.6;
    margin-top: 45px;
    @media (max-width: 851px) {
      // justify-content: center;
      // margin-left: -30px;
      // margin-top: 25px;
      // img {
      //   margin-left: 30px;
      //   margin-bottom: 20px;
      // }
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }
    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .client-image-wrapper {
    cursor: pointer;
    &:hover {
      animation: var(--wobbleVertical);
    }
  }
`;

export default ClientsArea;
