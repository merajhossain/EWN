import signupFormModel from './signupFormModel';
const {
  formField: {
    businessName,
    websitesUrl,
    districtOrState,
    cityOrTown,
    postCode,
    address,
    fileUpload,
    firstName,
    lastName,
    phoneNumber,
    email,
    nationalIdNumber,
    role,
    password,
    confirmpassword,
    zipCode
  }
} = signupFormModel;

export default {
  [businessName.name]: '',
  [websitesUrl.name]: '',
  [districtOrState.name]: '',
  [cityOrTown.name]: '',
  [postCode.name]: false,
  [address.name]: '',
  [fileUpload.name]: '',
  [firstName.name]: '',
  [lastName.name]: '',
  [phoneNumber.name]: '',
  [email.name]: '',
  [nationalIdNumber.name]: '',
  [role.name]: '',
  [password.name]: '',
  [confirmpassword.name]: '',
  [zipCode.name]: '',
};
