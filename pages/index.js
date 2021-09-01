import { Fragment } from "react"
import Hero from "../components/home-page/hero"
import FeaturedPosts from "../components/home-page/feature-posts"
import { getFeaturedPosts } from "../lib/posts-util"
import Head from "next/head"

function HomePage (props) {
  return (
    <Fragment>
      <Head>
        <title>Chirag' blog</title>
        <meta name="description" content="Posts about programming and web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  )
}
export async function getStaticProps () {
  const featuredPosts = getFeaturedPosts()
  return {
    props: {
      posts: featuredPosts
    }
  }
} 
export default HomePage