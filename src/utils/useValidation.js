import { useEffect, useState } from "react"

export const useValidation = (value, validations) => {
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    dance:
    for (const validation in validations) {
      switch (validation) {
        case 'regExp':
          if (validations.regExp.test(String(value).toLowerCase())) {
            setError(false);
          } else {
            setError(true);
            setErrMessage('Введены некорректные данные');
            break dance;
          }
          break;
        case 'isEmpty':
          if (value) {
            setError(false);
          } else {
            setError(true);
            setErrMessage('Поле обязательно к заполнению');
            break dance;
          }
          break;
        case 'minLength':
          if (value.length > validations[validation]) {
            setError(false);
          } else {
            setError(true);
            setErrMessage('Минимальная длина: 2 символа');
            break dance;
          }
          break;
        case 'maxLength':
          if (value.length < validations[validation]) {
            setError(false);
          } else {
            setError(true);
            setErrMessage('Максимальная длина: 40 символов');
            break dance;
          }
          break;
        default:
      }
    }
  }, [value])

  return {
    error,
    errMessage
  }
}
