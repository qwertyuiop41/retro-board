import Box from '../../../common/components/Box';
import Heading from '../../../common/components/Heading';
import Image from '../../../common/components/Image';
import Container from '../../../common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ClientsArea from './clients.style';
const Clients = () => {
  const Data = useStaticQuery(graphql`
    query {
      webAppJson {
        COMPANY_DATA {
          title
          images {
            src {
              publicURL
            }
          }
        }
      }
    }
  `);
  const { title, images } = Data.webAppJson.COMPANY_DATA;
  return (
    <ClientsArea>
      <Container>
        <Heading as="h4" content={title} />
        <Box className="imageWrap">
          {images.map(({ src }, index) => (
            <div
              className="client-image-wrapper"
              key={`client-image-key-${index}`}
            >
              <Image src={src.publicURL} alt="" />
            </div>
          ))}
        </Box>
      </Container>
    </ClientsArea>
  );
};

export default Clients;
