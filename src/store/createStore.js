import { useSyncExternalStore } from 'react';

export function createStore(initialState, actionsFactory) {
  let state = initialState;
  const listeners = new Set();

  const getState = () => state;

  const setState = (updater) => {
    const nextState = typeof updater === 'function' ? updater(state) : updater;
    state = { ...state, ...nextState };
    listeners.forEach((listener) => listener());
  };

  const actions = actionsFactory?.(setState, getState) || {};

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const useStore = (selector = (current) => current) =>
    useSyncExternalStore(
      subscribe,
      () => selector(state),
      () => selector(state),
    );

  return {
    getState,
    setState,
    useStore,
    actions,
  };
}
