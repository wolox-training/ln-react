/* eslint-disable no-negated-condition */
export const validate = values => {
  const errors = {};
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (!values.user) {
    errors.user = 'User name is required';
  } else if (!emailRegex.test(values.user)) {
    errors.user = 'Incorrect mail account.';
  }

  return errors;
};
