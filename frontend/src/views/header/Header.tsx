import { Route, useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountMenu from '../../auth/AccountMenu';
import { HomeOutlined } from '@mui/icons-material';
import ProPill from '../../components/ProPill';
import useSidePanel from '../panel/useSidePanel';
import useIsInitialised from '../../auth/useIsInitialised';
import { useCallback } from 'react';
import { Typography } from '@mui/material';
import Invite from '../layout/Invite';
import SearchBar from './SearchBar';

export default function Header() {
  const history = useHistory();
  const { toggle: togglePanel } = useSidePanel();
  const isInitialised = useIsInitialised();
  // const user = useUser();
  const goToHome = useCallback(() => history.push('/'), [history]);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={togglePanel}
          size="large"
        >
          <MenuIcon />
        </IconButton>
        <HomeButton>
          <IconButton
            color="inherit"
            aria-label="Home"
            onClick={goToHome}
            size="large"
          >
            <HomeOutlined />
          </IconButton>
        </HomeButton>
        <MainTitle variant="h6" color="inherit" onClick={goToHome}>
          Retrospected&nbsp;
        </MainTitle>
        <ProPillContainer>
          <ProPill small />
        </ProPillContainer>
        <SearchBar />
        <Route path="/game/:gameId" component={Invite} />

        {isInitialised ? (
          <AccountMenu />
        ) : (
          <Initialising>Loading...</Initialising>
        )}
      </Toolbar>
    </AppBar>
  );
}

const Title = styled(Typography)`
  color: white;
`;

const MainTitle = styled(Title)`
  cursor: pointer;
  margin-right: 10px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const HomeButton = styled.div`
  margin-right: 10px;
`;

const ProPillContainer = styled.div`
  flex: 1;
`;

const Initialising = styled.div``;
