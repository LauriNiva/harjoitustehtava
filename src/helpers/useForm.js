import { useEffect, useState } from 'react';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join('');

  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  

  function handleChange(e) {
    let { value, name, type } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }


  return {
    inputs,
    handleChange,
    resetForm,
  };
}
