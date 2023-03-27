import { PostsGrid } from '../postsGrid/postsGrid';
import classes from './allPosts.module.css';

function AllPosts({ posts }: any) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default AllPosts;
