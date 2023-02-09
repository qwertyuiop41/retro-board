import styled from 'styled-components';

const BlogArea = styled.section`
  padding-top: 100px;
  @media (max-width: 1600px) {
    padding-top: 80px;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
  }
  .col {
    flex: 0 0 33.333%;
    max-width: 33.333%;
    padding-left: 15px;
    padding-right: 15px;
    @media (max-width: 575px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  .blockTitle {
    text-align: center;
    margin-bottom: 70px;
    @media (max-width: 1600px) {
      margin-bottom: 60px;
    }
    h2 {
      margin: 0;
      font-weight: 500;
      font-size: 24px;
      line-height: 31px;
      text-align: center;
      color: #0f2137;
      margin-bottom: 15px;
      @media (max-width: 768px) {
        font-size: 20px;
        line-height: 1.4;
      }
    }
    p {
      font-size: 15px;
      line-height: 1;
      color: #0f2137;
      @media (max-width: 768px) {
        line-height: 1.4;
      }
    }
  }
  .blogPost {
    box-shadow: 0px 3px 4px rgba(100, 135, 167, 0.08);
    border-radius: 6px;
    margin-bottom: 30px;
  }
  .blogImage {
    overflow: hidden;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    > img {
      width: 100%;
    }
  }
  .blogContent {
    padding-left: 22px;
    padding-right: 22px;
    padding-top: 20px;
    padding-bottom: 25px;
    h3 {
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      line-height: 1.53;
      color: #0f2137;
      margin-bottom: 10px;
      @media (max-width: 768px) {
        font-size: 15px;
      }
    }
  }
  .blogLink {
    display: inline-flex;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.33;
    color: #3183ff;
    align-items: center;
    i {
      margin-left: 10px;
      position: relative;
      top: -2px;
      transition: transform .4s ease;
    }
    &:hover {
      i {
        transform: translateX(2px);
      }
    }
  }

  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    position: relative;
    top: auto;
    left: auto;
    @media (min-width: 1200px) {
      display: none;
    }
  }
  .swiper-pagination-bullet-active {
    background-color: #3183ff;
  }
`;
export default BlogArea;
