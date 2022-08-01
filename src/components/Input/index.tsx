import React, { useState } from "react";
import { Container } from './styles';

interface InputProps {
  name: string
  label: string
  type?: string
}

const Input: React.FunctionComponent<InputProps> = ({ name, label, type }) => {
  const [value, setValue] = useState('')

  return (
    <Container>
      <input
        type={type}
        name={name}
        onChange={(e) => { setValue(e.target.value) }}
        className={type == 'textarea' ? 'isTextArea' : ''}
      />
      <label className={value && 'filled'} htmlFor={name}>{label}</label>
    </Container>
  )
}

export default Input