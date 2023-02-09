import Box from '../../../common/components/Box';
import Heading from '../../../common/components/Heading';
import Switch from '../../../common/components/Switch';
import Text from '../../../common/components/Text';
import Container from '../../../common/components/UI/Container';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import { androidDone } from 'react-icons-kit/ionicons/androidDone';
import PricingArea, {
  CardBody,
  CardFooter,
  CardTop,
  Col,
  PriceCard,
  PricingAmount,
  Row,
  TopHeading,
} from './pricing.style';

const Pricing = () => {
  const [state, setState] = useState({
    toggle: true,
  });

  const Data = useStaticQuery(graphql`
    query {
      webAppJson {
        MONTHLY_PRICING_DATA {
          recommended
          title
          price
          tagline
          planLabel
          options {
            text
          }
          button {
            label
            link
          }
        }
        YEARLY_PRICING_DATA {
          recommended
          title
          price
          tagline
          planLabel
          options {
            text
          }
          button {
            label
            link
          }
        }
      }
    }
  `);

  const dataHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    });
  };

  return (
    <PricingArea id="pricing_section">
      <Container className="Container">
        <TopHeading>
          <Heading as="h2" content="Meet our exiciting Pricing Plan" />
        </TopHeading>
        <Box className="priceFilter">
          <span>Monthly</span>
          <Switch
            switchColor="#fff"
            labelText=""
            labelPosition="left"
            onChange={dataHandle}
          />
          <span>Yearly</span>
        </Box>
        {state.toggle === false && (
          <Row>
            {Data.webAppJson.YEARLY_PRICING_DATA.map(
              (
                {
                  recommended,
                  title,
                  price,
                  tagline,
                  planLabel,
                  options,
                  button,
                },
                index
              ) => (
                <Col key={`pricing-card-key-${index}`}>
                  <PriceCard
                    className={recommended === true ? 'recommended' : ' '}
                  >
                    <CardTop className="cardTop">
                      <Heading as="h3" content={title} />
                      <PricingAmount>
                        <Heading as="h4" content={price} />
                        <Text as="p" content={tagline} />
                      </PricingAmount>
                    </CardTop>
                    <CardBody>
                      <Text
                        as="span"
                        className="pricingLabel"
                        content={planLabel}
                      />
                      <ul className="priceList">
                        {options.map(({ text }, index) => (
                          <li key={`priceList-key-${index}`}>
                            <Icon size={20} icon={androidDone} />
                            {text}
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                    <CardFooter className="cardFooter">
                      <Link className="priceBtn" to={button.link}>
                        <span>
                          {button.label}{' '}
                          <Icon size={18} icon={androidArrowForward} />
                        </span>
                      </Link>
                    </CardFooter>
                  </PriceCard>
                </Col>
              )
            )}
          </Row>
        )}
        {state.toggle === true && (
          <Row>
            {Data.webAppJson.MONTHLY_PRICING_DATA.map(
              (
                {
                  recommended,
                  title,
                  price,
                  tagline,
                  planLabel,
                  options,
                  button,
                },
                index
              ) => (
                <Col key={`pricing-card-key-${index}`}>
                  <PriceCard
                    className={recommended === true ? 'recommended' : ' '}
                  >
                    <CardTop>
                      <Heading as="h3" content={title} />
                      <PricingAmount>
                        <Heading as="h4" content={price} />
                        <Text as="p" content={tagline} />
                      </PricingAmount>
                    </CardTop>
                    <CardBody>
                      <Text
                        as="span"
                        className="pricingLabel"
                        content={planLabel}
                      />
                      <ul className="priceList">
                        {options.map(({ text }, index) => (
                          <li key={`priceList-key-${index}`}>
                            <Icon size={20} icon={androidDone} />
                            {text}
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                    <CardFooter>
                      <Link className="priceBtn" to={button.link}>
                        <span>
                          {button.label}{' '}
                          <Icon size={18} icon={androidArrowForward} />
                        </span>
                      </Link>
                    </CardFooter>
                  </PriceCard>
                </Col>
              )
            )}
          </Row>
        )}
      </Container>
    </PricingArea>
  );
};

export default Pricing;
