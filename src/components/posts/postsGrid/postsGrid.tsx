import { PostItem } from '../postItem/postItem';
import classes from './postsGrid.module.css';

export const PostsGrid = ({ posts }: any) => {
  return (
    <ul className={classes.grid}>
      {['posts'].map((post: any) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};
