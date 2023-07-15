import {TwitterTweetEmbed} from 'react-twitter-embed'

const Preview = (props) => {
  const {tweetId, renderDefault} = props || {}

  if (!tweetId) {
    return (
      <div>
        {renderDefault({...props, title: 'Twitter Embed'})}
        Tweet-ID mangler
      </div>
    )
  }

  return (
    <div>
      {renderDefault({...props, title: 'Twitter Embed'})}
      <TwitterTweetEmbed tweetId={tweetId} />
    </div>
  )
}

export default {
  name: 'twitter',
  type: 'object',
  title: 'Twitter Embed',
  fields: [
    {
      name: 'tweetId',
      type: 'string',
      title: 'Twitter tweet ID',
      description: 'Tweet-ID finner du i slutten av URL-en til tweeten.',
    },
    {
      name: 'twitterTitle',
      type: 'string',
      title: 'Tittel på tweet',
    },
  ],
  preview: {
    select: {
      tweetId: 'tweetId',
    },
  },
  components: {
    preview: Preview,
  },
}
