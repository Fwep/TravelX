import Validator from 'validator';

import { ensureStrType } from './data_conversion';

module.exports = function validateRegisterInput(data) {
   ensureStrType(data, 'handle', 'email', 'password', 'password2');
   const { handle, email, password, password2 } = data;

   const errors = {};

   if (!Validator.isLength(handle, { min: 2, max: 30 })) {
      errors.handle = 'Handle must be between 2 and 30 characters';
   }

   if (Validator.isEmpty(handle)) {
      errors.handle = 'Handle field is required';
   }

   if (!Validator.isEmail(email)) {
      errors.email = 'Email is invalid';
   }

   if (Validator.isEmpty(email)) {
      errors.email = 'Email field is required';
   }

   if (!Validator.isLength(password, { min: 6, max: 30 })) {
      errors.password = 'Password must be between 6 and 30 characters long';
   }

   if (Validator.isEmpty(password)) {
      errors.password = 'Password is required';
   }

   if (!Validator.equals(password, password2)) {
      errors.password2 = 'Passwords must match';
   }

   return {
      errors,
      isValid: Object.keys(errors).length === 0
   };
};