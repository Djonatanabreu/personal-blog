import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { PostHeader } from './components/postHeader/postHeader';
import classes from './postContent.module.css';

const DUMMY_POST = {
  title: 'Getting started with nextJS',
  image: 'getting-started-nextjs.png',
  content: '# This is a first post',
  date: '2022-02-10',
  slug: 'getting-started-with-nextjs1',
};

export const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};
