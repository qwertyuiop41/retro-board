import { Chat, Check, CheckCircle, Create } from '@mui/icons-material';
import {
  AvatarGroup,
  Badge,
  Button,
  colors,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import CustomAvatar from '../../components/Avatar';
import useParticipants from './useParticipants';
import useSession from './useSession';
import styled from '@emotion/styled';
import useUser from '../../auth/useUser';
import useTranslation from '../../translations/useTranslations';
import { useCallback } from 'react';
import { trackEvent } from '../../track';
import { Message } from '@retrospected/common';
import useModal from '../../hooks/useModal';
import ChatModal from './chat/ChatModal';

type ParticipantsProps = {
  messages: Message[];
  onReady: () => void;
  onMessage: (content: string) => void;
};

function Participants({ onReady, onMessage, messages }: ParticipantsProps) {
  const { participants } = useParticipants();
  const { session } = useSession();
  const user = useUser();
  const { PostBoard: translations } = useTranslation();
  const isUserReady = !!user && !!session && session.ready.includes(user.id);
  const fullScreen = useMediaQuery('(min-width:600px)');
  const [chatOpen, openChat, closeChat] = useModal();
  const handleReady = useCallback(() => {
    trackEvent('game/session/user-ready');
    onReady();
  }, [onReady]);
  return (
    <Container>
      <AvatarGroup
        max={50}
        sx={{
          flexDirection: 'row',
        }}
      >
        {participants
          .filter((u) => u.online)
          .map((user) => {
            return (
              <Badge
                overlap="circular"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={
                  session?.ready.includes(user.id) ? (
                    <CheckCircle htmlColor={colors.green[500]} />
                  ) : undefined
                }
              >
                <CustomAvatar user={user} key={user.id} title={user.name} />
              </Badge>
            );
          })}
      </AvatarGroup>
      {user && !fullScreen ? (
        <IconButton onClick={handleReady}>
          {isUserReady ? (
            <Create htmlColor={colors.orange[500]} />
          ) : (
            <Check htmlColor={colors.green[500]} />
          )}
        </IconButton>
      ) : null}
      {user && fullScreen ? (
        <Button
          onClick={handleReady}
          variant="outlined"
          endIcon={
            isUserReady ? (
              <Create htmlColor={colors.orange[500]} />
            ) : (
              <Check htmlColor={colors.green[500]} />
            )
          }
        >
          {isUserReady ? translations.iAmNotDoneYet : translations.iAmDone}
        </Button>
      ) : null}
      {user ? (
        <IconButton onClick={chatOpen ? closeChat : openChat}>
          <Chat htmlColor={colors.orange[500]} />
        </IconButton>
      ) : null}
      {chatOpen ? (
        <ChatModal messages={messages} onMessage={onMessage} />
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  > :first-child {
    flex: 1;
  }
`;

export default Participants;
