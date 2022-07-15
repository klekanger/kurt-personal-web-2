/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'simplePortableText'
 *  }
 */
import React from 'react'

const highlightRender = (props) => (
  <span style={{backgroundColor: 'yellow', color: 'black'}}>{props.children}</span>
)

export default {
  title: 'Portable Text',
  name: 'simplePortableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [{title: 'Normal', value: 'normal'}],
      lists: [],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Fet tekst', value: 'strong'},
          {title: 'Kursiv', value: 'em'},
          {
            title: 'Uthev i farge',
            value: 'mark',
            blockEditor: {
              icon: () => 'H',
              render: highlightRender,
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [],
      },
    },
  ],
}
