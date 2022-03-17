import * as yup from 'yup';

import { validateMobileNumber, validateMobileNumberFormat } from 'helper/validatePhoneNumber';

const ERROR_MOBILE_NUMBER_INVALID_FORMAT = 'Invalid Mobile Number format';
const ERROR_MOBILE_NUMBER_INVALID = 'Invalid Mobile Number';
const ERROR_EMAIL_INVALID = 'Invalid Email Address format';
const ERROR_FIELD_REQUIRED = 'This field is required';

export const validationSchema = yup.object({
  name: yup.string().required(ERROR_FIELD_REQUIRED).nullable(),
  phone: yup
    .string()
    .test({
      name: 'validateMobileNumberFormat',
      test: validateMobileNumberFormat,
      message: ERROR_MOBILE_NUMBER_INVALID_FORMAT
    })
    .test({
      name: 'validateMobileNumber',
      test: validateMobileNumber,
      message: ERROR_MOBILE_NUMBER_INVALID
    })
    .required(ERROR_FIELD_REQUIRED)
    .nullable(),
  email: yup.string().required(ERROR_FIELD_REQUIRED).email(ERROR_EMAIL_INVALID).nullable()
});

export const defaultValues = {
  name: '',
  phone: '',
  email: ''
};
