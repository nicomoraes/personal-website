import React, { useState } from "react";
import { Container } from './styles';

interface Props {
  name: string
  label: string
  type?: string
  required?: boolean
}

const Input: React.FunctionComponent<Props> = ({ name, label, type, required }) => {
  const [value, setValue] = useState('')

  return (
    <Container>
      <input
        type={type}
        name={name}
        onChange={(e) => { setValue(e.target.value) }}
        className={type == 'textarea' ? 'isTextArea' : ''}
        required={required ? true : false}
      />
      <label className={value && 'filled'} htmlFor={name}>{label}</label>
    </Container>
  )
}

export default Input