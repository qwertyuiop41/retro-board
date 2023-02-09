import styled from 'styled-components';

const TestimonialsArea = styled.section`
  .container {
    max-width: 787px;
  }
  .blockTitle {
    text-align: center;
    margin-bottom: 35px;
    img {
      margin-left: auto;
      margin-right: auto;
    }
    h2 {
      margin: 0;
      margin-top: 45px;
      font-weight: 500;
      font-size: 30px;
      line-height: 1.6;
      text-align: center;
      letter-spacing: -0.02em;
      color: #0f2137;
      @media (max-width: 1600px) {
        font-size: 26px;
      }
      @media (max-width: 375px) {
        margin-top: 15px;
        font-size: 22px;
      }
    }
  }
  .testimonial_card {
    text-align: center;
    h3 {
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      line-height: 22px;
      color: #19191b;
      margin-bottom: 5px;
      display: none;
      @media (max-width: 1600px) {
        font-size: 16px;
      }
      @media (max-width: 575px) {
        display: block;
      }
    }
    span {
      font-size: 15px;
      line-height: 1;
      color: #696871;
      opacity: 0.7;
      display: none;
      @media (max-width: 575px) {
        display: block;
      }
    }
  }
  .testimonials_content {
    display: inline-flex;
    align-items: flex-start;
    @media (max-width: 375px) {
      flex-direction: column;
    }
    img {
      position: relative;
      left: 5px;
      top: -5px;
      @media (max-width: 375px) {
        display: block;
        left: auto;
        top: auto;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 15px;
      }
    }
    p {
      font-size: 22px;
      line-height: 1.82;
      text-align: center;
      color: #36526c;
      font-style: italic;
      @media (max-width: 1600px) {
        font-size: 20px;
        line-height: 2;
      }
      @media (max-width: 575px) {
        font-size: 18px;
        line-height: 2;
        margin-bottom: 20px;
      }
    }
  }
  .glide__bullets {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 575px) {
      margin-top: 30px;
    }
    .glide__bullet + .glide__bullet {
      margin-left: 30px;
      @media (max-width: 991px) {
        margin-left: 15px;
      }
    }
    .glide__bullet {
      cursor: pointer;
      border: none;
      outline: none;
      background-color: transparent;
      -webkit-appearance: none;
      width: 231px;
      box-shadow: 0px 2px 5px rgba(132, 159, 184, 0.15);
      border-radius: 40px;
      padding: 15px;
      display: flex;
      align-items: center;
      text-align: left;
      transition: box-shadow .4s ease;
      @media (max-width: 575px) {
        width: auto;
      }
      > img {
        width: 50px;
        border-radius: 50%;
        flex-shrink: none;
        margin-right: 15px;
        @media (max-width: 575px) {
          margin-right: 0;
        }
      }
      h3 {
        margin: 0;
        font-weight: 500;
        font-size: 17px;
        line-height: 22px;
        color: #19191b;
        margin-bottom: 5px;
        @media (max-width: 1600px) {
          font-size: 16px;
        }
        @media (max-width: 575px) {
          display: none;
        }
      }
      span {
        font-size: 15px;
        line-height: 1;
        color: #696871;
        opacity: 0.7;
        @media (max-width: 575px) {
          display: none;
        }
      }
      &:hover,
      &--active {
        box-shadow: 0px 14px 40px rgba(132, 159, 184, 0.12);
      }
    }
  }
`;
export default TestimonialsArea;
