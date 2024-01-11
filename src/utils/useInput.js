import { useState } from "react";
import { useValidation } from "./useValidation";

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const [isChange, setChange] = useState(false);
  const valid = useValidation(value, validations);

  const reloadInputValue = (value) => {
    setValue(value);
  }

  const onChange = (e) => {
    setValue(e.target.value);
    setChange(true);
  }

  const onFocus = (e) => {
    setDirty(true);
  }

  return {
    value,
    reloadInputValue,
    onChange,
    onFocus,
    isDirty,
    isChange,
    ...valid
  }
}
