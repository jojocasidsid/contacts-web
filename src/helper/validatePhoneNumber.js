export const validateMobileNumber = (value) => {
  if (typeof value === 'undefined') {
    return false;
  }

  if (value === '' || value === 'XXX-XXX-XXXX' || value === null) {
    return true;
  }

  return value[0] === '9';
};

export const validateMobileNumberFormat = (value) => {
  const pattern = /^\d{3}-\d{3}-\d{4}$/;

  if (typeof value === 'undefined') {
    return false;
  }

  if (value === '' || value === 'XXX-XXX-XXXX' || value === null) {
    return true;
  }

  return Boolean(value.match(pattern));
};
