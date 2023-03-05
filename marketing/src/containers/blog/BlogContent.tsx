import { BlogDocument } from '@/lib/getBlog';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import styled from 'styled-components';
import { Source_Serif_Pro } from '@next/font/google';
import BlogTitle from './BlogTitle';
// import { Hel } from '@next/font/google';

const font = Source_Serif_Pro({
  weight: ['200', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

type BlogContentProps = {
  document: BlogDocument;
};

type ImageElement = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const renderers = {
  img: (image: ImageElement) => {
    console.log('Image: ', image);

    if (image.src?.includes('.svg')) {
      return <img src={image.src} alt={image.alt} />;
    }
    return <ImageRenderer {...image} />;
  },
  image: (image: any) => {
    console.log('Image: ', image);
    return <Image src={image.src} alt={image.alt} fill />;
  },
  paragraph: (paragraph: any) => {
    const { node } = paragraph;
    if (node.children[0].type === 'image') {
      const image = node.children[0];
      return <ImageRenderer {...image} />;
    }

    return <p>{paragraph.children}</p>;
  },
};

export default function BlogContent({ document }: BlogContentProps) {
  return (
    <>
      <Article className={font.className}>
        <BlogTitle document={document} />
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            img: renderers.img,
            image: renderers.image,
            p: renderers.paragraph,
          }}
        >
          {document.content}
        </ReactMarkdown>
      </Article>
    </>
  );
}

function ImageRenderer({ src, alt }: ImageElement) {
  return (
    <ImageContainer>
      <Image src={src!} alt={alt!} fill />
    </ImageContainer>
  );
}

const ImageContainer = styled.span`
  // font-family: ${font.style.fontFamily} !important;
  display: block;
  position: relative;
  // width: 100%;
  margin: 0 auto;
  height: 300px;
  aspect-ratio: 4/3;
  // border: 2px solid red;

  > img {
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    object-fit: contain;
  }
`;

const Article = styled.article`
  margin: 0 20%;
  color: rgb(41, 41, 41);

  @media (max-width: 768px) {
    margin: 0 10px;
  }

  position: relative;
  ul {
    li {
      margin-left: 1.5rem;
      list-style: '- ';
    }
  }

  p:first-of-type::first-letter {
    initial-letter: 2;
  }

  p {
    font-size: 20px;
    line-height: 32px;
    color: rgb(41, 41, 41);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  h1 {
    font-size: 34px;
    font-weight: 700;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 28px;
  }

  h4 {
    font-size: 26px;
  }

  h5 {
    font-size: 1rem;
  }
`;
