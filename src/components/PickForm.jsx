import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormField } from './FormField';
import FormButton from './FormButton';

const PickForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    startingAddress: Yup.string().required('Starting address is required'),
    endingAddress: Yup.string().required('Ending address is required'),
    pickupDate: Yup.date().required('Pickup date is required').min(new Date(), 'Pickup date cannot be in the past'),
    packageDetails: Yup.string().required('Package details are required'),
    contactInfo: Yup.string().required('Contact information is required'),
  });

  // Initial form values
  const initialValues = {
    startingAddress: '',
    endingAddress: '',
    pickupDate: '',
    packageDetails: '',
    contactInfo: '',
  };

  // Form submission handler
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    // Add API call here to save the request
    resetForm(); // Reset the form after submission
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div className='flex flex-col gap-4'>

          <div className='flex flex-row gap-8 border-2 border-gray-300 p-4 rounded-lg'>
          <div className='flex flex-col w-340px'>
            <h2 className='text-xl font-bold'>Pick up From</h2>
            <div className='flex flex-col gap-2'>
            <FormField
              id="startingCompany"
              name="startingCompany"
              type="text"
              label="Company Name"
              placeholder="Enter company name"
              disabled={false}
              onChange={ Formik.handleChange }
            />

            <FormField
              id="startingAddress"
              name="startingAddress"
              type="text"
              label="Starting Address"
              placeholder="Enter starting address"
              disabled={false}
              onChange={ Formik.handleChange }
            />
            </div>
        </div>

        <div className='flex flex-col'>
        <h2 className='text-xl font-bold'>Deliver To</h2>
          <div className='flex flex-col gap-2'>
            
            <FormField
                  id="endingCompany"
                  name="endingCompany"
                  type="text"
                  label="Company Name"
                  placeholder="Enter company name"
                  disabled={false}
                  onChange={ Formik.handleChange }
                />


              <FormField
                    id="endingAddress"
                    name="endingAddress"
                    type="text"
                    label="Ending Address"
                    placeholder="Enter ending address"
                    disabled={false}
                    onChange={ Formik.handleChange }
                  />
                  </div>
        </div>
        </div>
            {/* <FormField
              id="pickupDate"
              name="pickupDate"
              type="date"
              label="Pickup Date"
              placeholder="Enter Pickup Date"
              disabled={false}
              onChange={() => {}}
            />

            <FormField
              id="packageDetails"
              name="packageDetails"
              type="text"
              label="Package Details"
              placeholder="Enter Package Details"
              disabled={false}
              onChange={() => {}}
            />  

          <FormField
              id="contactInfo"
              name="contactInfo"
              type="text"
              label="Contact Information"
              placeholder="Enter Contact Information"
              disabled={false}
              onChange={() => {}}
            /> */}

          {/* <FormButton 
            text="Submit"
            isSubmittingText="Submitting..."
            buttonClass="bg-blue-500 text-white px-4 py-2 rounded"
            disable={false}
            disableClass="opacity-50 cursor-not-allowed"
            isSubmitting={false}
            onClick={() => {}}
            type="submit"
          /> */}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PickForm;