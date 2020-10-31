import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';
import { Button, Card } from 'react-native-material-ui';
import axios from 'axios';
import router from './router/router';

const App = (
) => {

    return (
        <View style={styles.container}>
                <Text>
                    Bem Vindo 
                </Text>
                {/* <router></router> */}
                {/* <Login></Login> */}
        </View>
    );

  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });

export default App;