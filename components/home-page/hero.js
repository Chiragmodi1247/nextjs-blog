import Image from 'next/image'

import classes from './hero.module.css'

function Hero () {
  return (
    <section className={classes.hero}>
      <div className={classes.image} >
        <Image src="/images/site/chirag.png" alt="max" width={300} height={300} />
      </div>
      <h1>Hi, I'm Chirag</h1>
      <p>
        I upload blog about tech from famous blogs sites like Techcrunch
      </p>
    </section>
  )
}

export default Hero