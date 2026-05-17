import { useState } from 'react';

export function useLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const submit = () => ({
    email,
    password,
    keepSignedIn,
  });

  return {
    email,
    setEmail,
    password,
    setPassword,
    keepSignedIn,
    setKeepSignedIn,
    submit,
  };
}
