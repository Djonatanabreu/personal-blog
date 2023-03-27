import { Fragment } from 'react';
import { Hero } from '@/components/homePage/hero/hero';
import './page.css';
import { FeaturedPosts } from '@/components/homePage/featuredPosts/featuredPosts';

const DUMMY_POSTS = [
  {
    title: 'Getting started with nextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Nextjs is a The React framework for production - it makes building fullstack Applications',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs1',
  },
  {
    title: 'Getting started with nextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Nextjs is a The React framework for production - it makes building fullstack Applications',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs2',
  },
  {
    title: 'Getting started with nextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Nextjs is a The React framework for production - it makes building fullstack Applications',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs3',
  },
  {
    title: 'Getting started with nextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Nextjs is a The React framework for production - it makes building fullstack Applications',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs4',
  },
];

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
