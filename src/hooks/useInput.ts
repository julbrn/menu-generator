import React, { useState } from "react";
import useValidation from "./useValidation";
import { ObjType } from "./useValidation";

const useInput = (initialValue: string, validationOptions: ObjType) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const valid = useValidation(value, validationOptions);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true);
  };

  const clear = () => {
    setValue("");
    setIsDirty(false);
  };

  return { value, onChange, onBlur, isDirty, ...valid, clear };
};

export default useInput;
