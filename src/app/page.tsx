import { Fragment } from 'react';
import { Hero } from '@/components/homePage/hero/hero';
import './page.css';

import { FeaturedPosts } from '@/components/homePage/featuredPosts/featuredPosts';

import { getFeaturedPosts } from '../../lib/posts-util';

export default function Home() {
  const featuredPosts = getFeaturedPosts();

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </Fragment>
  );
}
