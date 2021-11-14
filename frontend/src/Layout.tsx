import { useEffect, lazy, Suspense } from 'react';
import { useHistory, Redirect, Switch, Route } from 'react-router-dom';
import { trackPageView } from './track';
import useIsCompatibleBrowser from './hooks/useIsCompatibleBrowser';
import OutdatedBrowser from './components/OutdatedBrowser';
import useUser from './auth/useUser';
import { CodeSplitLoader } from './CodeSplitLoader';
import { Alert, AlertTitle } from '@mui/material';
import useBackendCapabilities from './global/useBackendCapabilities';
import Header from './views/header/Header';

const Home = lazy(() => import('./views/Home' /* webpackChunkName: "home" */));
const Game = lazy(() => import('./views/Game' /* webpackChunkName: "game" */));
const LoginPage = lazy(
  () => import('./views/login/LoginPage' /* webpackChunkName: "login" */)
);
const AccountPage = lazy(
  () => import('./views/account/AccountPage' /* webpackChunkName: "account" */)
);
const CancelPage = lazy(
  () => import('./views/subscribe/CancelPage' /* webpackChunkName: "cancel" */)
);
const SuccessPage = lazy(
  () =>
    import('./views/subscribe/SuccessPage' /* webpackChunkName: "success" */)
);
const SubscribePageOuter = lazy(
  () =>
    import(
      './views/subscribe/SubscribePageOuter' /* webpackChunkName: "subscribe" */
    )
);
const ResetPasswordPage = lazy(
  () => import('./views/Reset' /* webpackChunkName: "reset" */)
);
const ValidatePage = lazy(
  () => import('./views/Validate' /* webpackChunkName: "validate" */)
);
const DisclaimerPage = lazy(
  () =>
    import('./views/policies/Disclaimer' /* webpackChunkName: "disclaimer" */)
);
const AcceptableUsePolicyPage = lazy(
  () =>
    import(
      './views/policies/AcceptableUse' /* webpackChunkName: "acceptable-use" */
    )
);
const CookiesPolicyPage = lazy(
  () => import('./views/policies/Cookies' /* webpackChunkName: "cookies" */)
);
const TermsAndConditionsPage = lazy(
  () => import('./views/policies/Terms' /* webpackChunkName: "terms" */)
);
const PrivacyPolicyPage = lazy(
  () => import('./views/policies/Privacy' /* webpackChunkName: "privacy" */)
);
const Panel = lazy(
  () => import('./views/Panel' /* webpackChunkName: "panel" */)
);
const EncryptionDoc = lazy(
  () =>
    import('./views/home/Encryption' /* webpackChunkName: "encryption-doc" */)
);
const AdminPage = lazy(
  () => import('./views/admin/AdminPage' /* webpackChunkName: "admin-page" */)
);

function App() {
  const history = useHistory();
  const backend = useBackendCapabilities();
  const isCompatible = useIsCompatibleBrowser();
  const user = useUser();
  useEffect(() => {
    trackPageView(window.location.pathname);
    const unregister = history.listen((location) => {
      trackPageView(location.pathname);
    });
    return () => {
      unregister();
    };
  }, [history]);
  return (
    <div>
      {!backend.licenced ? (
        <Alert title="Unlicenced" severity="error">
          <AlertTitle>Retrospected is Unlicenced</AlertTitle>
          This software is unlicenced. You can obtain a licence{' '}
          <a
            target="_blank"
            href="https://www.retrospected.com/subscribe?product=self-hosted"
            rel="noreferrer"
          >
            here
          </a>
          . A licence will give you, for a one-time fee, unlimited updates,
          access to all pro features for all users, and a dedicated
          administration panel.
        </Alert>
      ) : null}
      <Header />
      <Suspense fallback={<CodeSplitLoader />}>
        <Switch>
          <Route path="/" exact>
            {user ? <Home /> : null}
          </Route>
          <Redirect from="/session/:gameId" to="/game/:gameId" />
          <Route path="/game/:gameId" component={Game} />
          <Route path="/validate" component={ValidatePage} />
          <Route path="/reset" component={ResetPasswordPage} />
          <Route path="/account" component={AccountPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/subscribe" component={SubscribePageOuter} exact />
          <Route path="/subscribe/success" component={SuccessPage} exact />
          <Route path="/subscribe/cancel" component={CancelPage} exact />
          <Route path="/admin" component={AdminPage} />
          <Route path="/privacy" component={PrivacyPolicyPage} />
          <Route path="/terms" component={TermsAndConditionsPage} />
          <Route path="/cookies" component={CookiesPolicyPage} />
          <Route path="/acceptable-use" component={AcceptableUsePolicyPage} />
          <Route path="/disclaimer" component={DisclaimerPage} />
          <Route path="/how-does-encryption-work" component={EncryptionDoc} />
        </Switch>
      </Suspense>
      <Panel />
      <OutdatedBrowser show={!isCompatible} />
    </div>
  );
}

export default App;
