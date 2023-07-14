import React, { useState, useEffect } from "react";
export interface ObjType {
  isEmpty: boolean;
  isUrl?: boolean;
  isNumber?: boolean;
}
const useValidation = (value: string, validationOptions: ObjType) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [urlError, setUrlError] = useState<boolean>(false);
  const [numberError, setNumberError] = useState<boolean>(false);
  const [inputValid, setInputValid] = useState<boolean>(false);
  useEffect(() => {
    for (const validationOption in validationOptions) {
      switch (validationOption) {
        case "isEmpty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case "isUrl":
          const regex = /^(ftp|http|https):\/\/[^ "]+$/;
          regex.test(String(value).toLowerCase())
            ? setUrlError(false)
            : setUrlError(true);
          break;
        case "isNumber":
          isNaN(Number(value)) ? setNumberError(true) : setNumberError(false);
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || numberError || urlError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, numberError, urlError]);

  return { isEmpty, urlError, inputValid, numberError };
};

export default useValidation;
