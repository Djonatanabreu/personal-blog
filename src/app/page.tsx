import { Fragment } from 'react';
import { Hero } from '@/components/homePage/hero/hero';
import './page.css';

import { FeaturedPosts } from '@/components/homePage/featuredPosts/featuredPosts';

export default async function Home(props: any) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={'featuredPosts'} />
    </Fragment>
  );
}
