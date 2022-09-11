/**
 * Make it possible to highlight text in a heading.
 * To hightlight text, wrap the text in <mark> tags.
 *
 * @param heading The text for the heading.
 * @param  marks CSS classes to add to the marked text.
 *
 * @returns An <h1> element with the text and highlighted marks.
 *
 */
import { HeadingWithMarksProps } from '../../types/interfaces';

export default function HeadingWithMarks({
  heading,
  marks = 'text-brand-secondary2 dark:text-brand-dark-secondary2 xl:inline',
  wrap = false,
}: HeadingWithMarksProps): JSX.Element {
  let headlineWithHighlights;

  // Highlight words in the title, where <mark> is used
  // by replacing <mark> with <span> and adding the necessary classes.
  if (heading) {
    headlineWithHighlights = heading
      .replace(/<mark>/g, `<span class="${marks} ${wrap && 'block'}">`)
      .replace(/<\/mark>/g, '</span>');
  } else {
    headlineWithHighlights = '';
  }

  return (
    <h1
      dangerouslySetInnerHTML={{ __html: headlineWithHighlights }}
      className='text-3xl font-extrabold tracking-tight text-brand-main2 dark:text-brand-dark-main2 sm:text-4xl md:text-5xl'
    ></h1>
  );
}
