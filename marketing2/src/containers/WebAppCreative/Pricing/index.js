import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import Fade from 'react-reveal/Fade';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';

import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import Text from 'common/components/Text';

import { pricing } from 'common/data/WebAppCreative';
import {
  Section,
  SectionHeading,
  SwitcherWrapper,
  Grid,
  PriceTable,
} from './pricing.style';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Section id="pricing">
      <Container width="1400px">
        <SectionHeading>
          <Heading content="Explore our exciting pricing" />
        </SectionHeading>
        <SwitcherWrapper>
          <button className={isMonthly ? 'active' : undefined}>Monthly</button>
          <span className="switcher" onClick={handleToggle} role="button">
            <span
              className={`switcher-button ${isMonthly ? 'left' : 'right'}`}
            />
          </span>
          <button className={!isMonthly ? 'active' : undefined}>Yearly</button>
        </SwitcherWrapper>
        <Grid>
          {pricing.map((priceTable) => (
            <Fade key={priceTable.id} up delay={priceTable.id * 100}>
              <PriceTable
                className={
                  priceTable.isActive
                    ? 'active animate__animated animate__fadeInUp'
                    : 'animate__animated animate__fadeInUp'
                }
              >
                <Heading
                  content={`${priceTable.currencySymbol}${
                    isMonthly
                      ? priceTable.price.monthly
                      : priceTable.price.annual
                  }`}
                />
                <Heading as="h5" content={priceTable.title} />
                <Text content={priceTable.desc} />
                <figure>
                  <Image src={priceTable.icon?.src} alt={priceTable.title} />
                </figure>
                <Button title={priceTable.button.label} />
                <a className="link" href={priceTable.details.link}>
                  {priceTable.details.label}{' '}
                  <Icon size={20} icon={ic_keyboard_arrow_right} />
                </a>
              </PriceTable>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Pricing;
