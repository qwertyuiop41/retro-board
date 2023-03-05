import { BlogDocument } from '@/lib/getBlog';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import styled from 'styled-components';

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
    return <ImageRenderer {...image} />;
  },
  // image: (image: React.SVGProps<SVGImageElement>) => {
  //   console.log('Image: ', image);
  //   return <Image src={image.src} alt={image.alt} fill />;
  // },
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
    <Article>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img: renderers.img,
          // image: renderers.image,
          p: renderers.paragraph,
        }}
      >
        {document.content}
      </ReactMarkdown>
    </Article>
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
  width: 100%;
  height: 300px;
  aspect-ratio: 4/3;
  border: 2px solid red;
  > img {
    object-fit: contain;
  }
`;

const Article = styled.article`
  position: relative;
  ul {
    li {
      margin-left: 1.5rem;
      list-style: '- ';
    }
  }
`;
