import React from "react";
const useValidation = (value, validationOptions) => {
  const [isEmpty, setIsEmpty] = React.useState<boolean>(true);
  const [minLengthError, setMinLengthError] = React.useState<boolean>(false);
  const [urlError, setUrlError] = React.useState<boolean>(false);
  const [inputValid, setInputValid] = React.useState<boolean>(false);
  React.useEffect(() => {
    for (const validationOption in validationOptions) {
      switch (validationOption) {
        case "minLength":
          value.length < validationOptions[validationOption]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case "isUrl":
          const regex = /^(ftp|http|https):\/\/[^ "]+$/;
          regex.test(String(value).toLowerCase())
            ? setUrlError(false)
            : setUrlError(true);
          break;
      }
    }
  }, [value]);

  React.useEffect(() => {
    if (isEmpty || minLengthError || urlError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, urlError]);

  return { isEmpty, minLengthError, urlError, inputValid };
};

export default useValidation;
