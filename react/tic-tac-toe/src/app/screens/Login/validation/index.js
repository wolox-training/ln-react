const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

export default {
  required: value => (value ? undefined : 'Required'),
  email: value => (value && !emailRegex.test(value) ? 'Incorrect mail account.' : undefined),
  passLenght: value => (value && value.length !== 8 ? 'Must be 8 characteres.' : undefined)
};
