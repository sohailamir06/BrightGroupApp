import { getNewsFeedPage } from '../../services/news/newsRepository';
import { createStore } from '../createStore';

const initialPage = getNewsFeedPage();

export const newsStore = createStore({ items: initialPage.items }, (setState, getState) => ({
  toggleBookmark: (newsId) =>
    setState({
      items: getState().items.map((item) =>
        item.id === newsId ? { ...item, bookmarked: !item.bookmarked } : item,
      ),
    }),
  toggleLike: (newsId) =>
    setState({
      items: getState().items.map((item) =>
        item.id === newsId
          ? { ...item, liked: !item.liked, likes: item.liked ? item.likes - 1 : item.likes + 1 }
          : item,
      ),
    }),
  toggleRead: (newsId) =>
    setState({
      items: getState().items.map((item) =>
        item.id === newsId ? { ...item, read: !item.read } : item,
      ),
    }),
  markRead: (newsId) =>
    setState({
      items: getState().items.map((item) => (item.id === newsId ? { ...item, read: true } : item)),
    }),
}));

export const useNewsStore = newsStore.useStore;
export const newsActions = newsStore.actions;
