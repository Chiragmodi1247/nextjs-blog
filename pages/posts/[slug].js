import { Fragment } from "react"
import PostContent from "../../components/posts/post-detail/post-content"
import { getPostData, getPostsFiles } from "../../lib/posts-util"
import Head from "next/head"

function PostDetailPage (props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  )
}

export function getStaticProps (context) {
  const { params } = context
  const { slug } = params
  
  const post = getPostData(slug)
  return {
    props: {
      post
    },
    revalidate: 600
  }
}

export function getStaticPaths () {
  const postFilesNames = getPostsFiles()
  const slugs = postFilesNames.map(postFile => postFile.replace(/\.md$/, ''))

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false
  }
}

export default PostDetailPage