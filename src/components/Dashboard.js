
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Button, Card } from 'react-native-material-ui';
import { onSignOut, isSignedIn } from  '../services/auth';

const Dashboard = ( { navigation }
) => {

    return (
        <View style={styles.container}>
            <View >
                <View style={styles.boxBV}>
                    <Text>
                        Bem  Vindo!, Enquanto você estiver logado, poderá fechar o app que irá para esta tela
                    </Text>
                </View>
                <View style={styles.boxBV}>
                    <Button accent  text="Sair" raised  onPress={sair}/>
                </View>
            </View>
        </View>
        
    );

    function sair(){
        onSignOut().then(() => navigation.navigate("SignedOut"));
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxBV: {
        backgroundColor: 'white',
        padding: 10
    }
  });

export default Dashboard;