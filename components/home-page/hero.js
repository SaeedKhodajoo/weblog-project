import classes from "./hero.module.css";
import Image from 'next/image'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/avatarImage.jpg" alt="image showing Saeed Khodajoo" width={300} height={300} />
      </div>
      <h1>سلام، من سعید خداجو هستم
      </h1>
      <p>در حال یادگیری نکست و این دومین پروژه من با این تکنولوژی هستش</p>
    </section>
  );
}

export default Hero;
