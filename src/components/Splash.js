
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const Dashboard = ( { navigation }
) => {

    return (
        <View style={styles.container}>
                <Text>
                    Teste Leader Aplicativos (Splash)
                </Text>
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

export default Dashboard;