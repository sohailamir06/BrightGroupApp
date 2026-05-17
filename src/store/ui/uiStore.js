import { createStore } from '../createStore';

export const uiStore = createStore(
  {
    toast: null,
    bottomSheet: null,
    confirmation: null,
  },
  (setState) => ({
    showToast: (toast) => {
      setState({ toast });
      setTimeout(() => setState({ toast: null }), toast?.duration || 2200);
    },
    hideToast: () => setState({ toast: null }),
    openBottomSheet: (bottomSheet) => setState({ bottomSheet }),
    closeBottomSheet: () => setState({ bottomSheet: null }),
    confirm: (confirmation) => setState({ confirmation }),
    closeConfirmation: () => setState({ confirmation: null }),
  }),
);

export const useUiStore = uiStore.useStore;
export const uiActions = uiStore.actions;
