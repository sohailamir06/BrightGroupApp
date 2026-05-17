import { useMemo, useState } from 'react';

import { authActions, useAuthStore } from '../store/auth/authStore';
import { validateForgotPassword, validateLoginForm } from '../utils/auth/validation';

export function useLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotError, setForgotError] = useState('');
  const auth = useAuthStore();

  const validationErrors = useMemo(() => validateLoginForm({ email, password }), [email, password]);
  const isValid = Object.keys(validationErrors).length === 0;

  const updateEmail = (value) => {
    setEmail(value);
    if (touched.email) {
      setErrors(validateLoginForm({ email: value, password }));
    }
  };

  const updatePassword = (value) => {
    setPassword(value);
    if (touched.password) {
      setErrors(validateLoginForm({ email, password: value }));
    }
  };

  const blurField = (field) => {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors(validateLoginForm({ email, password }));
  };

  const submit = async () => {
    const nextErrors = validateLoginForm({ email, password });
    setTouched({ email: true, password: true });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      return false;
    }

    await authActions.signIn({ email, rememberMe: auth.rememberMe });
    return true;
  };

  const submitForgotPassword = async () => {
    const error = validateForgotPassword(forgotEmail || email);
    setForgotError(error);

    if (error) {
      return false;
    }

    await authActions.sendPasswordReset(forgotEmail || email);
    return true;
  };

  return {
    email,
    setEmail: updateEmail,
    password,
    setPassword: updatePassword,
    keepSignedIn: auth.rememberMe,
    setKeepSignedIn: authActions.setRememberMe,
    errors,
    touched,
    isValid,
    isSubmitting: auth.isSubmitting,
    passwordVisible,
    togglePasswordVisible: () => setPasswordVisible((current) => !current),
    blurField,
    forgotPasswordOpen: auth.forgotPasswordOpen,
    openForgotPassword: () => {
      setForgotEmail(email);
      setForgotError('');
      authActions.openForgotPassword();
    },
    closeForgotPassword: authActions.closeForgotPassword,
    forgotEmail,
    setForgotEmail,
    forgotError,
    resetEmailSentTo: auth.resetEmailSentTo,
    submitForgotPassword,
    submit,
  };
}
