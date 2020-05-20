import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  max-width: 200px;
  margin: 20px auto 20px auto;
  display: grid;
  grid-template-columns: 1fr auto;
  border:1px solid #00a3ad;
  border-radius: 4px;
`;

const Input = styled.input`
  border-radius: 4px;
  border: none;
  padding: 0px 10px;
`;

const Button = styled.button`
  border-radius: 4px;
  border: none;
  background: #e1faff;
  padding: 10px;
  font-weight: 600;
  color: #00a3ad;
  cursor: pointer;
`;

const Form = ({ handleSubmit }) => {
  const [input, setInput] = useState('');

  return (
    <StyledForm
      data-testid="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(input);
      }}
    >
      <Input
        type="text"
        value={input}
        placeholder="Enter a number..."
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit">Go</Button>
    </StyledForm>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
