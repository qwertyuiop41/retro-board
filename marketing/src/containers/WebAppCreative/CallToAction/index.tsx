import Container from '../../../common/components/UI/Container';
import Heading from '../../../common/components/Heading';
import Text from '../../../common/components/Text';
import Section, { Content } from './cta.style';
import bubble1 from '../../../common/assets/image/webAppCreative/cta-bubble-1.png';
import bubble2 from '../../../common/assets/image/webAppCreative/cta-bubble-2.png';
import { useTranslation } from 'next-i18next';
import Button from '@/common/components/Button';

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <img src={bubble1?.src} className="bubble-1" alt="bubble1" />{' '}
      {/* TODO IMAGE */}
      <Container width="1400px">
        <Content>
          <Heading content={t('CTA.heading')} />
          <Text content={t('CTA.description')} />
          <Button title={t('CTA.button')!} />
          <span>{t('CTA.hint')}</span>
        </Content>
      </Container>
      <img src={bubble2?.src} className="bubble-2" alt="bubble2" />
    </Section>
  );
};

export default CallToAction;
