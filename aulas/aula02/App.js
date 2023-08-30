import { View, StyleSheet } from 'react-native'
import Box from './components/Box';

// componente principal
const App = () => (
  <View style={styles.container}>
    <Box color={'red'} size={30}></Box>
    <Box color={'green'} size={30}></Box>
    <Box color={'blue'} size={30}></Box>
  </View>
);
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent : 'space-between',
    alignItems: 'stretch',
  }
})



export default App;
