import React, { useReducer } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../Header/Header';
import Form from '../Form/Form';
import ThinkingIndicator from '../ThinkingIndicator/ThinkingIndicator';

const INVALID_INPUT = 'INVALID_INPUT';
const FETCH_INIT = 'FETCH_INIT';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

export const dataReducer = (state, action) => {
  switch (action.type) {
    case INVALID_INPUT:
      return {
        isThinking: false,
        errorMessage: action.message,
        data: [],
      };
    case FETCH_INIT:
      return {
        isThinking: true,
        errorMessage: null,
        data: state.data,
      };
    case FETCH_SUCCESS:
      return {
        isThinking: false,
        errorMessage: null,
        data: action.payload,
      };
    case FETCH_FAILURE:
      return {
        isThinking: false,
        errorMessage: action.message,
        data: [],
      };
    default:
      throw new Error();
  }
};

const AppContent = styled.div`
  position: relative;
  width: 450px;
  max-width: 90%;
  margin: 70px auto;
  padding: 40px;
  background: white;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0 2px 5px -1px rgba(50, 50, 93, 0.25), 
              0 1px 3px -1px rgba(0, 0, 0, 0.3);
`;

const Paragraph = styled.p`
  margin: 20px 0;
  line-height: 22px;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #454545;
`;

const ErrorMessage = styled.p`
  color: palevioletred;
`;

const Label = styled.span`
  font-weight: 600;
`;

const App = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    isThinking: false,
    errorMessage: false,
    data: [],
  });

  const handleFormSubmit = async (value) => {
    const num = Number(value);

    if (Number.isNaN(num) || value === '') {
      dispatch({
        type: INVALID_INPUT,
        message: 'Input must be a number',
      });
      return;
    }

    if (num < 3) {
      dispatch({
        type: INVALID_INPUT,
        message: 'Number must be at least 3',
      });
      return;
    }

    dispatch({ type: FETCH_INIT });
    try {
      const result = await axios.get(`http://localhost:5000/${num}`);
      dispatch({ type: FETCH_SUCCESS, payload: result.data });
    } catch (error) {
      dispatch({ type: FETCH_FAILURE, message: 'Something went wrong...' });
    }
  };

  return (
    <>
      <Header />
      <AppContent data-testid="content-container">
        {state.isThinking && <ThinkingIndicator label="Thinking..." />}
        <Title>Median Primes Calculator</Title>
        <Paragraph>
          Enter a number below to find the median prime
          number(s) of the set of prime numbers less than n
        </Paragraph>
        <Form handleSubmit={handleFormSubmit} />
        {state.errorMessage && <ErrorMessage>{state.errorMessage}</ErrorMessage>}
        {state.data.length > 0 && (
          <p>
            <Label>{`Median Prime${state.data[1] ? 's' : ''}: `}</Label>
            {state.data[0]}
            {state.data[1] && `, ${state.data[1]}`}
          </p>
        )}
      </AppContent>
    </>
  );
};

export default App;
