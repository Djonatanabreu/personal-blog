import { PostsGrid } from '@/components/posts/postsGrid/postsGrid';
import classes from './featuredPosts.module.css';

export const FeaturedPosts = ({ posts }: any) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};
