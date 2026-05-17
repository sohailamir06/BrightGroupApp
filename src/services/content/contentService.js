import { contentAuthors, contentCategories, contentPosts, contentTags } from '../../constants/mock/contentData';

export async function getContentFeed() {
  return {
    authors: contentAuthors,
    categories: contentCategories,
    posts: contentPosts,
    tags: contentTags,
    nextCursor: null,
  };
}

export async function getContentDetails(contentId) {
  const post = contentPosts.find((item) => item.id === contentId);

  return {
    post,
    author: post ? contentAuthors[post.authorId] : null,
  };
}
