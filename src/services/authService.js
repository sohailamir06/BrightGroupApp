export async function signIn(credentials) {
  return {
    user: {
      email: credentials.email,
    },
    token: 'development-token',
  };
}
