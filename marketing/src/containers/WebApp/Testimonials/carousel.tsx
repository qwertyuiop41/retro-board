import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import testimonialsQuote from '../../../common/assets/image/webApp/testimonials-qoute-1-1.svg';
import Heading from '../../../common/components/Heading';
import Image from '../../../common/components/Image';
import Text from '../../../common/components/Text';
import React, { useEffect } from 'react';
const Carousel = ({ data }) => {
  useEffect(() => {
    const glide = new Glide('#glide_carousel', {
      type: 'carousel',
      perView: 1,
      gap: 0,
    });
    glide.mount();
  });

  return (
    <div className="glide" id="glide_carousel">
      <div className="slide__wrapper">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {data.map(({ text, name, designation }, index) => (
              <li className="glide__slide" key={`glide__slide--key${index}`}>
                <div className="testimonial_card">
                  <div className="testimonials_content">
                    <Image
                      className="qouteImage"
                      src={testimonialsQuote}
                      alt="testimonials image"
                    />
                    <Text as="p" content={text} />
                  </div>
                  <Heading as="h3" content={name} />
                  <Text as="span" content={designation} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {data.map(({ image, name, designation }, index) => (
          <button
            className="glide__bullet"
            data-glide-dir={`=${index}`}
            key={`glide_bullet--key${index}`}
          >
            <Image src={image.publicURL} alt={name} />
            <div className="content">
              <Heading as="h3" content={name} />
              <Text as="span" content={designation} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
