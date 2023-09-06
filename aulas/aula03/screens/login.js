import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const Login = () => {
  return (
    <View style={estilos.container}>
      <Image
        style={{
          width:40,
          height:40,
          borderRadius:20,
        }}
        source={{
          uri:'https://github.com/brunnovaz1.png'
        }}
        />     
      <Image style={estilos.logo}
        source={require('../assets/snack-icon.png')}
      />
      <Text style={estilos.titulo}>Login</Text>

      <TextInput style={estilos.input}
        placeholder={'e-mail'}
        keyboardType={'email-address'}
      />
      <TextInput style={estilos.input}
        placeholder={'senha'}
        secureTextEntry={true}
      /> 
      <Button title="Entrar"/>
     </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    paddingHorizontal:16,
  },
  logo:{
    height: 72,
    width: 72,
  },
  titulo:{
    fontSize: 28,
    fontWeight: 400,
    textAlign:'center',
    paddingBottom: 24,
  },
  input:{
    lignHeight: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 16, 
  }
})

export default Login;
