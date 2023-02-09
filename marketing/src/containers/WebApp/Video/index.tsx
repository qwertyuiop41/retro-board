import { closeModal, openModal } from '@redq/reuse-modal';
import videoBtn from 'common/assets/image/webApp/video-btn.svg';
import videoShape1 from 'common/assets/image/webApp/video-dot-1.svg';
import videoShape2 from 'common/assets/image/webApp/video-shape-1.svg';
import videoShape3 from 'common/assets/image/webApp/video-wave-1.svg';
import Box from 'common/components/Box';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import VideoArea, { VideoWrapper } from './video.style';

// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = ({ videoID }) => (
  <VideoWrapper>
    <iframe
      title="Video"
      src={`https://www.youtube.com/embed/${videoID}`}
      frameBorder="0"
    />
  </VideoWrapper>
);
const Video = () => {
  const Data = useStaticQuery(graphql`
    query {
      webAppJson {
        VIDEO_DATA {
          title
          videoID
        }
      }
    }
  `);

  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: <ModalContent videoID={Data.webAppJson.VIDEO_DATA.videoID} />,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  return (
    <VideoArea>
      <Container>
        <Heading as="h2" content={Data.webAppJson.VIDEO_DATA.title} />
        <Box className="videoBox">
          <Image src={videoShape1} alt="" className="videoShape-1" />
          <Image src={videoShape2} alt="" className="videoShape-2" />
          <Image src={videoShape3} alt="" className="videoShape-3" />
          <Button
            className="videoBtn"
            onClick={handleVideoModal}
            icon={<Image src={videoBtn} alt="" />}
            iconPosition="left"
            title=""
          />
        </Box>
      </Container>
    </VideoArea>
  );
};

export default Video;
