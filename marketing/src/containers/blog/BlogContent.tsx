import { BlogDocument } from '@/lib/getBlog';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import styled from 'styled-components';
import BlogTitle from './BlogTitle';
import { sourceSerifPro } from '@/common/fonts/Fonts';

type BlogContentProps = {
  document: BlogDocument;
};

type ImageElement = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const renderers = {
  img: (image: ImageElement) => {
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
      <Article className={sourceSerifPro.className}>
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
  display: block;
  position: relative;
  margin: 0 auto;
  height: 300px;
  aspect-ratio: 4/3;

  > img {
    padding: 20px;
    object-fit: contain;
  }
`;

const Article = styled.article`
  position: relative;
  margin: 0 20%;
  color: rgb(41, 41, 41);
  font-size: 1.25rem;

  @media (max-width: 768px) {
    margin: 0 10px;
  }

  > p:first-of-type::first-letter {
    initial-letter: 2;
    margin-right: 0.5rem;
  }

  p {
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
    font-size: 1.7rem;
    font-weight: 700;
  }

  h2 {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1.35rem;
  }

  h4 {
    font-size: 1.3rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  ul {
    padding-left: 1.5rem;
    li {
      list-style: '- ';
    }
  }

  ol {
    padding-left: 1.5rem;
    li {
      list-style: decimal;
    }
  }

  blockquote {
    margin-left: -2rem;
    padding-left: 2rem;
    border-left: 4px solid rgb(41, 41, 41);
    font-style: italic;
  }

  pre {
    display: block;
    padding: 1.5rem 0;
    code {
      background-color: #f6f8fa;
      padding: 20px;
    }
  }

  p {
    code {
      display: inline-block;
      padding: 0 1rem;
      background-color: #f6f8fa;
    }
  }
`;
