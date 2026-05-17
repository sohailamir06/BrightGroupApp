import { fileCategories, fileSortOptions, filesMockData } from '../../constants/mock/files/filesData';
import { createStore } from '../createStore';

const initialState = {
  files: filesMockData,
  categories: fileCategories,
  sortOptions: fileSortOptions,
  query: '',
  categoryId: 'all',
  sortId: 'recent',
  fileType: '',
  recentOnly: false,
  byMeOnly: false,
  teamOnly: false,
  viewMode: 'list',
  previewFileId: null,
  refreshing: false,
};

export const filesStore = createStore(initialState, (setState, getState) => ({
  setQuery: (query) => setState({ query }),
  clearQuery: () => setState({ query: '' }),
  setCategory: (categoryId) => setState({ categoryId }),
  setSort: (sortId) => setState({ sortId }),
  setViewMode: (viewMode) => setState({ viewMode }),
  setPreviewFile: (previewFileId) => setState({ previewFileId }),
  toggleFavorite: (fileId) =>
    setState({
      files: getState().files.map((file) =>
        file.id === fileId ? { ...file, favorite: !file.favorite } : file,
      ),
    }),
  toggleFilter: (filterKey) => setState({ [filterKey]: !getState()[filterKey] }),
  setFileType: (fileType) => setState({ fileType: getState().fileType === fileType ? '' : fileType }),
  refresh: () => {
    setState({ refreshing: true });
    setTimeout(() => setState({ refreshing: false }), 350);
  },
}));

export const useFilesStore = filesStore.useStore;
export const filesActions = filesStore.actions;
