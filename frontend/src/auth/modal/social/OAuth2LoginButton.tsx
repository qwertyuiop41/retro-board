import { createButton } from 'react-social-login-buttons';
import { colors } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const config = {
  activeStyle: { background: colors.grey[100] },
  icon: AccountCircle,
  style: { background: 'white', color: 'black' },
  text: "Login with your company's authentication",
};

const OAuthLoginButton = createButton(config);

export default OAuthLoginButton;
