import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(proccess.cwd(), 'posts');

export function getPostData(fileName) {
  const filePath = path.join(proccess.cwd(), fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  postSlug = fileName.replace(/\.md$/, ''); // removes the file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllposts() {
  const postFiles = fs.readdirSync(postsDirectory);

  postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllposts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
