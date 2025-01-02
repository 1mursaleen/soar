import Input from '@/components/ui/Input';
import Avatar from '@/components/ui/Avatar';
import Upload from '@/components/ui/Upload';
import Button from '@/components/ui/Button';
import Select from '@/components/ui/Select';
import Switcher from '@/components/ui/Switcher';
import Notification from '@/components/ui/Notification';
import toast from '@/components/ui/toast';
import { FormContainer } from '@/components/ui/Form';
import FormDesription from './FormDesription';
import FormRow from './FormRow';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { components } from 'react-select';
import {
  HiOutlineUserCircle,
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineUser,
  HiCheck,
  HiOutlineGlobeAlt,
} from 'react-icons/hi';
import * as Yup from 'yup';
import type { OptionProps, ControlProps } from 'react-select';
import type { FormikProps, FieldInputProps, FieldProps } from 'formik';
import EditIcon from '@/assets/svg/EditIcon';

export type ProfileFormModel = {
  name: string;
  userName: string;
  email: string;
  password: string;
  dob: string;
  currentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
};

type ProfileProps = {
  data?: ProfileFormModel;
};

type LanguageOption = {
  value: string;
  label: string;
  imgPath: string;
};

const { Control } = components;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(12, 'Name must not exceed 12 characters')
    .required('Name is required'),

  userName: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(12, 'Username must not exceed 12 characters')
    .required('Username is required'),

  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must not exceed 20 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character'
    )
    .matches(/^\S*$/, 'Password must not contain spaces'),

  dob: Yup.date()
    .required('Date of Birth is required')
    .max(new Date(), 'Date of Birth cannot be in the future'),

  currentAddress: Yup.string()
    .min(5, 'Address must be at least 5 characters')
    .max(100, 'Address must not exceed 100 characters')
    .required('Current Address is required'),

  permanentAddress: Yup.string()
    .min(5, 'Address must be at least 5 characters')
    .max(100, 'Address must not exceed 100 characters')
    .required('Permanent Address is required'),

  city: Yup.string()
    .min(2, 'City must be at least 2 characters')
    .max(50, 'City must not exceed 50 characters')
    .required('City is required'),

  postalCode: Yup.string()
    .matches(/^\d{5}$/, 'Postal Code must be exactly 5 digits')
    .required('Postal Code is required'),

  country: Yup.string()
    .min(2, 'Country name must be at least 2 characters')
    .max(50, 'Country name must not exceed 50 characters')
    .required('Country is required'),
});

const Profile = ({
  data = {
    name: '',
    userName: '',
    email: '',
    password: '',
    dob: '',
    currentAddress: '',
    permanentAddress: '',
    city: '',
    postalCode: '',
    country: '',
  },
}: ProfileProps) => {
  const onSetFormFile = (
    form: FormikProps<ProfileFormModel>,
    field: FieldInputProps<ProfileFormModel>,
    file: File[]
  ) => {
    form.setFieldValue(field.name, URL.createObjectURL(file[0]));
  };

  const onFormSubmit = (
    values: ProfileFormModel,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    console.log('values', values);
    toast.push(<Notification title={'Profile updated'} type='success' />, {
      placement: 'top-center',
    });
    setSubmitting(false);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        setTimeout(() => {
          onFormSubmit(values, setSubmitting);
        }, 1000);
      }}
    >
      {({ values, touched, errors, isSubmitting }) => { 
        return (
          <Form>
            <FormContainer>
              <div className='content-wrapper flex flex-col md:flex-row'>
                {/* Avatar */}
                <div className='text-center flex-1 mt-4'>
                  <Field name='avatar'>
                    {({ field, form }: FieldProps) => {
                      const avatarProps = { src: field.value || "/img/avatars/profile.jpg" };
                      return (
                        <Upload
                          className='cursor-pointer'
                          showList={false}
                          uploadLimit={1}
                          onChange={(files) =>
                            onSetFormFile(form, field, files)
                          }
                          onFileRemove={(files) =>
                            onSetFormFile(form, field, files)
                          }
                        >
                          <Avatar
                            className='border-2 border-white dark:border-gray-800 shadow-lg'
                            size={90}
                            shape='circle'
                            {...avatarProps}
                          />
                          <span className='absolute bottom-0 right-0'>
                            <EditIcon />
                          </span>
                        </Upload>
                      );
                    }}
                  </Field>
                </div>

                <div className='fields-wrapper flex flex-wrap flex-1 md:flex-[5]'>
                  <div className=''>
                    <label className='text-inputLabel'>Your Name</label>
                    <Field
                      type='text'
                      autoComplete='off'
                      name='name'
                      placeholder='Name'
                      component={Input}
                      className={`w-full p-2 rounded-xl text-inputColor  text-sm ${
                        errors?.name && touched?.name
                          ? 'border-red-500 border-1'
                          : 'border-inputBorder focus:border-inputBorder'
                      } border focus:outline-none !shadow-none`}
                    />
                    {errors?.name && touched?.name && (
                      <p className='error mt-1 text-red-500 text-[13px]'>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className='text-inputLabel'>User Name</label>
                    <Field
                      type='text'
                      autoComplete='off'
                      name='userName'
                      placeholder='Username'
                      component={Input}
                      className={`w-full p-2 rounded-xl text-inputColor  text-sm ${
                        errors?.userName && touched?.userName
                          ? 'border-red-500 border-1'
                          : 'border-inputBorder focus:border-inputBorder'
                      } border focus:outline-none !shadow-none`}
                    />
                    {errors?.userName && touched?.userName && (
                      <p className='error mt-1 text-red-500 text-[13px]'>
                        {errors.userName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className='text-inputLabel'>Email</label>
                    <Field
                      type='email'
                      autoComplete='off'
                      name='email'
                      placeholder='Email'
                      component={Input}
                      className={`w-full p-2 rounded-xl text-inputColor  text-sm ${
                        errors?.email && touched?.email
                          ? 'border-red-500 border-1'
                          : 'border-inputBorder focus:border-inputBorder'
                      } border focus:outline-none !shadow-none`}
                    />
                    {errors?.email && touched?.email && (
                      <p className='error mt-1 text-red-500 text-[13px]'>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className='text-inputLabel'>Password</label>
                    <Field
                      type='password'
                      autoComplete='off'
                      name='password'
                      placeholder='Password'
                      component={Input}
                      className={`w-full p-2 rounded-xl text-inputColor  text-sm ${
                        errors?.password && touched?.password
                          ? 'border-red-500 border-1'
                          : 'border-inputBorder focus:border-inputBorder'
                      } border focus:outline-none !shadow-none`}
                    />
                    {errors?.password && touched?.password && (
                      <p className='error mt-1 text-red-500 text-[13px]'>
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className='text-inputLabel'>Date of Birth</label>
                    <Field
                      type='date'
                      autoComplete='off'
                      name='dob'
                      placeholder='Date of Birth'
                      component={Input}
                      className={`w-full p-2 rounded-xl text-inputColor  text-sm ${
                        errors?.dob && touched?.dob
                          ? 'border-red-500 border-1'
                          : 'border-inputBorder focus:border-inputBorder'
                      } border focus:outline-none !shadow-none`}
                    />
                    {errors?.dob && touched?.dob && (
                      <p className='error mt-1 text-red-500 text-[13px]'>
                        {errors.dob}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className='text-inputLabel'>Present Address</label>
                    <Field
                      type='text'
                      autoComplete='off'
                      name='currentAddress'
                      placeholder='Present Address'
                      component={Input}
                      className={`w-full p-2 rounded-xl text-inputColor  text-sm ${
                        errors?.currentAddress && touched?.currentAddress
                          ? 'border-red-500 border-1'
                          : 'border-inputBorder focus:border-inputBorder'
                      } border focus:outline-none !shadow-none`}
                    />
                    {errors?.currentAddress && touched?.currentAddress && (
                      <p className='error mt-1 text-red-500 text-[13px]'>
                        {errors.currentAddress}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className='text-inputLabel'>Permanent Address</label>
                    <Field
                      type='text'
                      autoComplete='off'
                      name='permanentAddress'
                      placeholder='Permanent Address'
                      component={Input}
                      className={`w-full p-2 rounded-xl text-inputColor  text-sm ${
                        errors?.permanentAddress && touched?.permanentAddress
                          ? 'border-red-500 border-1'
                          : 'border-inputBorder focus:border-inputBorder'
                      } border focus:outline-none !shadow-none`}
                    />
                    {errors?.permanentAddress && touched?.permanentAddress && (
                      <p className='error mt-1 text-red-500 text-[13px]'>
                        {errors.permanentAddress}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className='text-inputLabel'>City</label>
                    <Field
                      type='text'
                      autoComplete='off'
                      name='city'
                      placeholder='City'
                      component={Input}
                      className={`w-full p-2 rounded-xl text-inputColor  text-sm ${
                        errors?.city && touched?.city
                          ? 'border-red-500 border-1'
                          : 'border-inputBorder focus:border-inputBorder'
                      } border focus:outline-none !shadow-none`}
                    />
                    {errors?.city && touched?.city && (
                      <p className='error mt-1 text-red-500 text-[13px]'>
                        {errors.city}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className='text-inputLabel'>Postal Code</label>
                    <Field
                      type='text'
                      autoComplete='off'
                      name='postalCode'
                      placeholder='Postal Code'
                      component={Input}
                      className={`w-full p-2 rounded-xl text-inputColor  text-sm ${
                        errors?.postalCode && touched?.postalCode
                          ? 'border-red-500 border-1'
                          : 'border-inputBorder focus:border-inputBorder'
                      } border focus:outline-none !shadow-none`}
                    />
                    {errors?.postalCode && touched?.postalCode && (
                      <p className='error mt-1 text-red-500 text-[13px]'>
                        {errors.postalCode}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className='text-inputLabel'>Country</label>
                    <Field
                      type='text'
                      autoComplete='off'
                      name='country'
                      placeholder='Country'
                      component={Input}
                      className={`w-full p-2 rounded-xl text-inputColor  text-sm ${
                        errors?.country && touched?.country
                          ? 'border-red-500 border-1'
                          : 'border-inputBorder focus:border-inputBorder'
                      } border focus:outline-none !shadow-none`}
                    />
                    {errors?.country && touched?.country && (
                      <p className='error mt-1 text-red-500 text-[13px]'>
                        {errors.country}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className='mt-4 ltr:text-right px-2'>
                <Button
                  variant='solid'
                  loading={isSubmitting}
                  type='submit'
                  className='settings-save-btn w-full md:w-[180px]'
                >
                  {isSubmitting ? 'Saving' : 'Save'}
                </Button>
              </div>
            </FormContainer>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Profile;
