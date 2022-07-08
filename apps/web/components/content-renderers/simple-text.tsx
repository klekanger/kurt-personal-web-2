// Renders simple text content, in cases where rich text is not needed
import { SimpleTextProps } from '../../types/interfaces';

const SimpleText = ({
  text,
  marks = 'text-brand-secondary2 dark:text-brand-dark-secondary2 xl:inline',
}: SimpleTextProps) => {
  let textToRender;

  // Replace /n with <br /> and highlight words in the text, where <mark> is used
  if (text) {
    textToRender = text
      .replace(/\n/g, '<br />')
      .replace(/<mark>/g, `<span class="${marks}">`)
      .replace(/<\/mark>/g, '</span>');
  } else {
    textToRender = '';
  }

  return (
    <>
      <div
        className='leading-relaxed'
        dangerouslySetInnerHTML={{ __html: textToRender }}
      />
    </>
  );
};

export default SimpleText;
