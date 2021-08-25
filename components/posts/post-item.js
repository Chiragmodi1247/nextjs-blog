import Image from 'next/image'
import Link from 'next/link'

import classes from './post-item.module.css'

function PostItem (props) {
  const { title, image, date, excerpt, slug } = props.post

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} height={300} width={200} layout='responsive' />
          </div>
          <div className={classes.content} >
            <h3>Title</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostItem