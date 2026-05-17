import { useSyncExternalStore } from 'react';

const authState = {
  user: null,
  token: null,
};

const listeners = new Set();

function emit() {
  listeners.forEach((listener) => listener());
}

export function setSession(session) {
  authState.user = session.user;
  authState.token = session.token;
  emit();
}

export function clearSession() {
  authState.user = null;
  authState.token = null;
  emit();
}

export function useAuthStore() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => authState,
    () => authState,
  );
}
