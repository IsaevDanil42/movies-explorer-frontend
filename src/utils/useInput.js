import { useState } from "react";
import { useValidation } from "./useValidation";

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const [isChange, setChange] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const valid = useValidation(value, validations, currentValue);

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

  const saveCurrentValue = (value) => {
    setCurrentValue(value);
  }

  return {
    value,
    reloadInputValue,
    onChange,
    onFocus,
    saveCurrentValue,
    isDirty,
    isChange,
    ...valid
  }
}
