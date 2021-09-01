import Image from "next/image";

import classes from './post-header.module.css'

function PostHeader (props) {
  const { image, title } = props

  return <header className={classes.header}>
    <h1>{title}</h1>
    <Image src={image} height={250} width={400} alt={title} />
  </header>
}

export default PostHeader