import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledThinkingIndicator = styled.div`
  position: absolute;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background #ffffffee;
  border-radius: 6px;
`;

const Label = styled.span`
  font-weight: 500;
`;

const ThinkingIndicator = ({ label }) => (
  <StyledThinkingIndicator data-testid="thinking">
    <Label>{ label }</Label>
  </StyledThinkingIndicator>
);

ThinkingIndicator.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ThinkingIndicator;
