import { useState } from "react";

const useForm = (initialValues) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValues);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  const clearForm = (e) => {
    e.preventDefault();
    setValues(initialValues);
  };

  return [showSuccessMessage, values, handleChanges, handleSubmit, clearForm];
};
export default useForm;
