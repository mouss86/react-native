import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';



export default function homepage({navigation, route}) {

const [product, setProduct] = useState([
  {article: 'Orange Juice', key: 1},
  {article:'Banan Smoothie', key:2},
  {article: 'Cider', key:3}



])
  return (
    <View style={styles.container}>
        <Button title='Fond Bleu' onPress={() => {
                navigation.navigate("FondBleu");
            }}/>
      
       
      <FlatList

         data={product}   
         renderItem={({item}) => (
          <Text style={styles.item}>{item.article}</Text>


         )} 
       />

<StatusBar style="auto" />

    </View>
  );
}