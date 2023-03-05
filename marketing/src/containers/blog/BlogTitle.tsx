import { BlogDocument } from '@/lib/getBlog';
import styled from 'styled-components';

type BlogTitleProps = {
  document: BlogDocument;
};

export default function BlogTitle({ document }: BlogTitleProps) {
  return (
    <Container>
      <h1>{document.title}</h1>
      <h2>{document.subtitle}</h2>
    </Container>
  );
}

const Container = styled.div`
  h1 {
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
  }

  h2 {
    font-size: 22px;
    line-height: 28px;
    font-weight: 400;
    color: rgb(117, 117, 117);
    margin-top: -10px;
  }
`;
