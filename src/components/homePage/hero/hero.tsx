import './hero.module.css';
import Image from 'next/image';
import classes from './hero.module.css';

export const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={'/images/site/peace.jpeg'}
          alt='An image show Djohn'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Djohn</h1>
      <p>
        I blog about web Development - especially frontend frameworks like React
        and Angular
      </p>
    </section>
  );
};
