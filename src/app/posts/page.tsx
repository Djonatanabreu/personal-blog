import AllPosts from '@/components/posts/allPosts/allPosts';

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

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
