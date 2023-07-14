import React from "react";
import useValidation from "./useValidation";
const useInput = (initialValue, validationOptions) => {
  const [value, setValue] = React.useState(initialValue);
  const [isDirty, setIsDirty] = React.useState<boolean>(false);
  const valid = useValidation(value, validationOptions);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setIsDirty(true);
  };

  return { value, onChange, onBlur, isDirty, ...valid };
};

export default useInput;
