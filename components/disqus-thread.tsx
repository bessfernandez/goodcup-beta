import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
const DisqusComments = ({ post }) => {
  const disqusShortname = 'good-cup'
  const disqusConfig = {
    url: 'https://goodcup.coffee/post-slug',
    identifier: post.id, // Single post id
    title: post.title, // Single post title
  }
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  )
}
export default DisqusComments
