import { PortableText } from '@portabletext/react';
import markdownStyles from '../../styles/markdown.module.css';
import { serializers } from '../content-renderers/markdown-serializers';

export default function PostBody({ content }: any) {
  return (
    <div className={markdownStyles.markdown}>
      <PortableText value={content} components={serializers as Object} />
    </div>
  );
}
