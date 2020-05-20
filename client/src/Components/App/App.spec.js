import React from 'react';
import App, { dataReducer } from './App';

const initialData = [3,5];
describe('Reducer', () => {
  it('should set error message and clear data', () => {
    const state = {
      isThinking: false,
      errorMessage: null,
      data: initialData,
    };
    const newState = dataReducer(state, {
      type: 'INVALID_INPUT',
      message: 'Invalid input',
    });
    expect(newState).toEqual({ 
      isThinking: false, 
      errorMessage: 'Invalid input', 
      data: [],
    });
  });

  it('should set isThinking to true', () => {
    const state = {
      isThinking: false,
      errorMessage: null,
      data: initialData,
    };
    const newState = dataReducer(state, {
      type: 'FETCH_INIT',
    });
    expect(newState).toEqual({ 
      isThinking: true, 
      errorMessage: null, 
      data: initialData,
    });
  });

  it('should set data and set isThinking to false', () => {
    const state = {
      isThinking: true,
      errorMessage: null,
      data: [],
    };
    const newState = dataReducer(state, {
      type: 'FETCH_SUCCESS',
      payload: [1,2],
    });
    expect(newState).toEqual({
      isThinking: false,
      errorMessage: null,
      data: [1,2],
    });
  });

  it('should set error message, clear data, and set isThinking to false', () => {
    const state = {
      isThinking: true,
      errorMessage: null,
      data: initialData,
    };
    const newState = dataReducer(state, {
      type: 'FETCH_FAILURE',
      message: 'Something went wrong...',
    });
    expect(newState).toEqual({ 
      isThinking: false, 
      errorMessage: 'Something went wrong...', 
      data: [],
    });
  });
});