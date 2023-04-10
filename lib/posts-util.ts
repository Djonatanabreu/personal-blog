import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

interface FileContent {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  isFeatured: boolean;
}

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName: string) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const matterReturn = matter(fileContent); // extract data from MD file and content
  const data: FileContent = matterReturn.data as FileContent;
  const content = matterReturn.content;

  const postSlug = fileName.replace(/\.md$/, ''); // removes the file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sorteadPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sorteadPosts;
}

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => {
    post.isFeatured;
  });

  return featuredPosts;
};
