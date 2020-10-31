
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';
import { Button, IconToggle   } from 'react-native-material-ui';
import axios from 'axios';
import { onSignIn, isSignedIn } from  '../services/auth';

const Login = ( { navigation }
) => {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostarSenha] = useState(false);

    return (
        
        <View style={styles.container}>
            <View style={styles.boxLogin}>
                <View style={styles.center}>
                    <Text style={{ fontSize: 20 }}>
                        Bem Vindo
                    </Text>
                </View>
                    <TextInput placeholder="Usuário" value={usuario} onChangeText={text => setUsuario(text)}/>
                    <View style={styles.containerSenhaIcon}>
                        <View style={styles.alinharSenha}>
                            <TextInput secureTextEntry={!mostrarSenha} placeholder="Senha" value={senha} onChangeText={text => setSenha(text)}/>
                        </View>
                        <View style={styles.alinharIcon}>
                            <IconToggle name={mostrarSenha ? "visibility-off" : "visibility"}  onPress={alteraVisibilidade}/>
                        </View>
                    </View>
                    <Button primary text="Acessar" raised  onPress={fazerLogin}/>
            </View>
            
        </View>
    );

    function fazerLogin() {
        axios.post(`https://delivery.leaderaplicativos.com.br/api/api-token-auth/`, {email: usuario, password: senha})
          .then(res => {
            onSignIn(res.data.token).then(() => navigation.navigate("SignedIn"));
          }).catch(err => {
            alert('Credenciais inválidas');
          })
        // onSignIn('a').then(() => navigation.navigate("SignedIn"));
      }

    async function alteraVisibilidade(){
        setMostarSenha(!mostrarSenha);
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#9dfae4'
    },
    boxLogin: {
        backgroundColor: 'white',
        width: 250,
        padding: 20,
    },
    center: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
    containerSenhaIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    alinharSenha:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    alinharIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
  });

export default Login;