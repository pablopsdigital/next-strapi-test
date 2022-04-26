import React, {Children} from 'react';
import {Container} from '@chakra-ui/react';

export default function BasicLayout(props) {
  const {children} = props;

  return (
    <Container className="basic-layout" maxW="full">
      {children}
    </Container>
  );
}
