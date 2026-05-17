import { contentPosts } from '../../constants/mock/contentData';
import { createStore } from '../createStore';

export const contentStore = createStore({ posts: contentPosts }, (setState, getState) => ({
  toggleBookmark: (contentId) =>
    setState({
      posts: getState().posts.map((post) =>
        post.id === contentId ? { ...post, bookmarked: !post.bookmarked } : post,
      ),
    }),
  toggleLike: (contentId) =>
    setState({
      posts: getState().posts.map((post) =>
        post.id === contentId
          ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
          : post,
      ),
    }),
}));

export const useContentStore = contentStore.useStore;
export const contentActions = contentStore.actions;
