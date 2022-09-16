import * as Yup from 'yup';
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


const validationSchema = [
  Yup.object().shape({
    businessName: Yup.string().required(`${businessName.requiredErrorMsg}`),
    websitesUrl: Yup.string().required(`${websitesUrl.requiredErrorMsg}`),
    districtOrState: Yup.string().required(`${districtOrState.requiredErrorMsg}`),
    cityOrTown: Yup.string().required(`${cityOrTown.requiredErrorMsg}`),
    zipCode: Yup.string().required(`${zipCode.requiredErrorMsg}`),
    address: Yup.string().required(`${address.requiredErrorMsg}`),
    // fileUpload: Yup.string().required(`${fileUpload.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    firstName: Yup.string().required(`${firstName.requiredErrorMsg}`),
    lastName: Yup.string().required(`${lastName.requiredErrorMsg}`),
    email: Yup.string().email(`${email.requiredErrorMsg}`).required(),
    nationalIdNumber: Yup.number().required(`${nationalIdNumber.requiredErrorMsg}`),
    role: Yup.string().required(`${role.requiredErrorMsg}`),
    password: Yup.string().required(`${password.requiredErrorMsg}`).min(8, 'Your password is too short.').matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    confirmpassword: Yup.string().required(`${confirmpassword.requiredErrorMsg}`).oneOf([Yup.ref('password'), null], 'Passwords must match')
  })
];

export default validationSchema;
