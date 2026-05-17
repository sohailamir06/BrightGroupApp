export function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function validateLoginForm({ email, password }) {
  const errors = {};

  if (!email.trim()) {
    errors.email = 'Corporate email is required.';
  } else if (!validateEmail(email)) {
    errors.email = 'Enter a valid corporate email.';
  }

  if (!password) {
    errors.password = 'Password is required.';
  } else if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters.';
  }

  return errors;
}

export function validateForgotPassword(value) {
  if (!value.trim()) {
    return 'Enter your corporate email.';
  }

  if (!validateEmail(value)) {
    return 'Enter a valid corporate email.';
  }

  return '';
}
