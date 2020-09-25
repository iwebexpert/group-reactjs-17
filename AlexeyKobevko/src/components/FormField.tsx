import React, { ChangeEvent, FC, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface InputProps extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  value: string;
  name: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  field?: 'input' | 'textArea';
}

export const FormField: FC<InputProps> = ({ value, name, type, field, onChange, ...props }) =>
  field === 'input' ? (
    <Input {...props} onChange={onChange} name={name} value={value} type={type} />
  ) : (
    <TextArea {...props} onChange={onChange} name={name} value={value} />
  );

FormField.defaultProps = {
  type: 'text',
  field: 'input',
};

const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 30px;
    padding-left: ${theme.indents.i12};
    padding-right: ${theme.indents.i12};
  `}
`;

const TextArea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    padding-left: ${theme.indents.i12};
    padding-right: ${theme.indents.i12};
  `}
`;
