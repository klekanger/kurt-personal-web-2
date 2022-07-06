import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import markdownStyles from '../../styles/markdown.module.css';
import { serializers } from '../content-renderers/markdown-serializers';

export default function PostBody({ content }: { content: PortableTextBlock }) {
  return (
    <div className={markdownStyles.markdown}>
      <PortableText value={content} components={serializers as Object} />
    </div>
  );
}
