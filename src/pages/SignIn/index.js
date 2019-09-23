import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';
// eslint-disable-next-line import/no-named-as-default
import Input from '~/components/Input';
// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
    <Text>
      SingIn
    </Text>
    <Input style={{marginTop: 30}}icon="call" placeholder="Digite o seu nome" />
    </Background>
  );
}
