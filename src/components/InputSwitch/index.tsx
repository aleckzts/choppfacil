import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useCallback,
  useState,
} from 'react';
import { useField } from '@unform/core';

import HelpIcon from '../HelpIcon';

import { Container, SwitchTitle, SwitchBox, CheckSwitchButton } from './styles';

interface InputSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  help?: string;
}
const InputSwitch: React.FC<InputSwitchProps> = ({
  name,
  placeholder,
  help,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  const [isChecked, setIsChecked] = useState(!!defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
    });
    setIsChecked(!!defaultValue);
  }, [fieldName, defaultValue, registerField]);

  const handleClick = useCallback(() => {
    if (inputRef.current) {
      setIsChecked(!isChecked);
      inputRef.current.checked = !inputRef.current?.checked;
    }
  }, [isChecked]);

  return (
    <Container>
      <SwitchTitle>
        {placeholder}
        {!!help && <HelpIcon message={help} />}
      </SwitchTitle>
      <SwitchBox onClick={handleClick}>
        <input
          type="checkbox"
          ref={inputRef}
          onChange={handleClick}
          // defaultChecked={defaultValue}
          checked={isChecked}
          {...rest}
        />
        <CheckSwitchButton checked={isChecked} />
      </SwitchBox>
    </Container>
  );
};

export default InputSwitch;
