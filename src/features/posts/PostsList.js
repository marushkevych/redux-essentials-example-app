import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchPosts } from './postsSlice'

const PostExcerpt = ({ post }) => (
  <article className="post-excerpt">
    <h2>{post.title}</h2>
    <p>{post.content.substring(0, 100)}</p>
  </article>
)

export const PostsList = () => {
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts())
    }
  }, [posts, dispatch])

  const renderedPosts = posts.map((post) => (
    <PostExcerpt key={post.id} post={post} />
  ))

  return (
    <section>
      <h1>Posts</h1>
      {renderedPosts}
    </section>
  )
}