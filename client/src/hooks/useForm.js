import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const clearForm = (e) => {
    e.preventDefault();
    setValues(initialValues);
  };

  return [values, handleChanges, handleSubmit, clearForm];
};
export default useForm;
