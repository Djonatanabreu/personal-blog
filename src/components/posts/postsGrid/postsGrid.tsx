import { PostItem } from '../postItem/postItem';
import classes from './postsGrid.module.css';

export const PostsGrid = (props: any) => {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts?.map((post: any) => (
        <PostItem key={post.slug + Math.random()} post={post} />
      ))}
    </ul>
  );
};
