import CodeBlock from './code-block';
import Figure from './figure';
import getYouTubeId from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export const serializers = {
  types: {
    figure: Figure,
    code: CodeBlock,
    youtube: (props) => {
      const { url, youtubeTitle } = props.value || {};
      const id = getYouTubeId(url);
      return (
        <LiteYouTubeEmbed id={id} title={youtubeTitle || 'YouTube-video'} />
      );
    },
  },
  block: (props) => {
    const { node, children } = props;
    const { style, _key } = node;

    let HeadingTag;
    if (style === 'normal') {
      HeadingTag = 'p';
    } else {
      HeadingTag = 'div';
    }

    // Add Anchored Headings (H1...etc) for Portable Text. Ref https://www.sanity.io/schemas/anchored-headings-for-portable-text-a6c70b6e
    if (/^h\d/.test(style)) {
      // Even though HTML5 allows id to start with a digit, we append it with a letter to avoid various JS methods to act up and make problems
      const headingId = `h${_key}`;
      HeadingTag = style;
      return (
        <HeadingTag className='anchor' id={headingId}>
          {children}
        </HeadingTag>
      );
    } else {
      return <HeadingTag>{children}</HeadingTag>;
    }
  },
};
