import { ModalPortal } from 'react-native-modals';
import React from 'react'
import Stack from './Navigation/Stack'
import { NavigationContainer } from '@react-navigation/native';
import { ContextFunction } from './context/Context';

const App = () => {
  return (
    <NavigationContainer>
        <ContextFunction>
           <Stack/>
           <ModalPortal/>
        </ContextFunction>
    </NavigationContainer>
  )
}

export default App