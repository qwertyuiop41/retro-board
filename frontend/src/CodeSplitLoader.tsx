import CircularProgress from '@mui/material/CircularProgress';
import styled from '@emotion/styled';
import React from 'react';

export function CodeSplitLoader() {
  return (
    <Center>
      <CircularProgress />
    </Center>
  );
}

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
