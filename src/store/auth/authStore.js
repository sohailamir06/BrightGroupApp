import { createStore } from '../createStore';

const initialState = {
  user: null,
  token: null,
  rememberMe: false,
  isSubmitting: false,
  forgotPasswordOpen: false,
  resetEmailSentTo: '',
};

export const authStore = createStore(initialState, (setState) => ({
  setRememberMe: (rememberMe) => setState({ rememberMe }),
  openForgotPassword: () => setState({ forgotPasswordOpen: true }),
  closeForgotPassword: () => setState({ forgotPasswordOpen: false }),
  signIn: async ({ email, rememberMe }) => {
    setState({ isSubmitting: true });
    await new Promise((resolve) => setTimeout(resolve, 450));
    setState({
      user: {
        id: 'alex-rivera',
        name: 'Alex Rivera',
        email,
        role: 'The Digital Curator',
      },
      token: 'mock-session-token',
      rememberMe,
      isSubmitting: false,
    });
  },
  sendPasswordReset: async (email) => {
    setState({ isSubmitting: true });
    await new Promise((resolve) => setTimeout(resolve, 400));
    setState({
      resetEmailSentTo: email,
      forgotPasswordOpen: false,
      isSubmitting: false,
    });
  },
  logout: () => setState(initialState),
}));

export const useAuthStore = authStore.useStore;
export const authActions = authStore.actions;
