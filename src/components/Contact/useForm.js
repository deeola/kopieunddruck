import { useEffect, useState } from "react";

const useForm = (callback, validate) => {
  //Form Input  initial state
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    betreff:''
  });

  //ERRORS, isSubmitting and submitted states
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  //Display success function and remove after 3 seconds
  const showSuccess = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  //handle change event function
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  //useEffect hook for submitting and checking for errors
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();

      showSuccess();
      setValues({
        name: "",
        email: "",
        betreff: '',
        message: "",
      });
    }

    //eslint-disable-next-line
  }, [errors]);

  return {
    submitted,
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;