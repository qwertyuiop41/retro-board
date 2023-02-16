import Container from '../../../common/components/UI/Container';
import Heading from '../../../common/components/Heading';
import Text from '../../../common/components/Text';
import Input from '../../../common/components/Input';
import Button from '../../../common/components/Button';
import NextImage from '../../../common/components/NextImage';
import Section, {
  BannerContentWrapper,
  BannerContent,
  Subscribe,
  Figure,
} from './banner.style';
import dashboard from '../../../common/assets/image/webAppCreative/dashboard.png';
import envelope from '../../../common/assets/image/webAppCreative/icons/envelope.png';
import { useRouter } from 'next/router';
import { useTranslation }  from 'next-i18next';

const Banner = () => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');
  return (
    <Section id="home">
      <Container width="1400px">
        <BannerContentWrapper>
          <BannerContent>
            <Heading
              className="animate__animated animate__fadeInUp"
              content={`The leading Customer dashboard for your daily workspace ${locale}`}
            />
            <Text
              className="animate__animated animate__fadeInUp"
              content="Join 30,000+ businesses that use Segment's software and APIs to
              collect, clean, and control their customer data."
            />
             <Text
              className="animate__animated animate__fadeInUp"
              content={t('foo')}
            />
            <Subscribe className="animate__animated animate__fadeInUp">
              <Input
                inputType="email"
                placeholder="Your work email"
                iconPosition="left"
                aria-label="email"
                icon={<img src={envelope?.src} alt="envelope" />}
              />
              <Button title="Get a demo" type="submit" />
            </Subscribe>
          </BannerContent>
          <Figure className="animate__animated animate__fadeInUp animate__fast">
            <NextImage src={dashboard} alt="dashboard" />
          </Figure>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};


export default Banner;
