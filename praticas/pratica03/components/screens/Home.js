import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const DATA =[
    {Item1},
    {Item2},
    {Item3},
    {Item4},
    {Item5},
];


export default function Home(){
  return(
    <View>
      <View>
        <Text>Home</Text>
      </View>
      <FlatList 
        data={DATA}
        renderItem={({item}) => (<View> 
          <Text>{item}</Text>
        </View>)}
      />
    </View>
  )
}