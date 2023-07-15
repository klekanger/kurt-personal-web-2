import getYouTubeId from 'get-youtube-id'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Preview = (props) => {
  const {url, renderDefault} = props
  if (!url) {
    return <div>Missing YouTube URL</div>
  }
  const id = getYouTubeId(url)

  if (!id) {
    return <div>Missing YouTube ID</div>
  }

  return (
    <div>
      {renderDefault({...props, title: 'YouTube Embed'})}
      <LiteYouTubeEmbed id={id} />
    </div>
  )
}
export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    },
    {
      name: 'youtubeTitle',
      type: 'string',
      title: 'Tittel på YouTube-video',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: Preview,
  },
}
