import Box from './components/Box';
import { View, StyleSheet } from 'react-native';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'aliceblue',
    },

    flexColumn: {
      flexDirection: 'column',
    },
    flexRow: {
      flexDirection: 'row',
    },
    justifyStart: {
      justifyContent: 'flex-start',
    },
    justifyCenter: {
      justifyContent: 'center',
    },
    justifyEnd: {
      justifyContent: 'flex-end',
    },
    justifySpaceBetween: {
      justifyContent: 'space-between',
    },
    justifySpaceAround: {
      justifyContent: 'space-around',
    },
    justifySpaceEvenly: {
      justifyContent: 'space-evenly',
    },
  });

  return (
    <View
      style={[styles.container, styles.flexColumn, styles.justifyEnd]}>
      <Box color={'red'} size={25}></Box>
      <Box color={'black'} size={25}></Box>
      <Box color={'red'} size={25}></Box>
      <Box color={'black'} size={25}></Box>
    </View>
  );
};

export default App;
