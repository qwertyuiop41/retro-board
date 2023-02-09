import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../common/theme/webApp';

import { ResetCSS } from '../common/assets/css/style';
import { DrawerProvider } from '../common/contexts/DrawerContext';
import SEO from '../components/seo';
import Banner from '../containers/WebApp/Banner';
// import Blog from 'containers/WebApp/Blog';
// import CallToAction from 'containers/WebApp/CallToAction';
// import Clients from 'containers/WebApp/Clients';
// import Counter from 'containers/WebApp/Counter';
// import CustomerSupport from 'containers/WebApp/CustomerSupport';
// import Features from 'containers/WebApp/Features';
// import Footer from 'containers/WebApp/Footer';
import Navbar from '../containers/WebApp/Navbar';
// import Pricing from 'containers/WebApp/Pricing';
// import SecureDashboard from 'containers/WebApp/SecureDashboard';
// import Services from 'containers/WebApp/Services';
// import Testimonials from 'containers/WebApp/Testimonials';
// import Video from 'containers/WebApp/Video';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/WebApp/webApp.style';
import Sticky from 'react-stickynode';

const WebApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="Retrospected | Easy Online Retrospectives" />

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ContentWrapper>
            <Banner />
            {/* <Features />
            <Video />
            <Services />
            <Clients />
            <SecureDashboard />
            <Counter />
            <Testimonials />
            <Pricing />
            <CustomerSupport />
            <Blog />
            <CallToAction />
            <Footer /> */}
          </ContentWrapper>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default WebApp;
