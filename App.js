import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Button , ScrollView, FlatList} from 'react-native';
import Section2 from './components/Section2';
import styles from './styles'
import FormInput from './components/FormInput';
import {names} from './externalData';
import Users from './components/Users';

const Section = (propss) => {
  return (
    <View style={{margin : 10}}>
      <Text style={{fontSize: 20, fontWeight: 500}}>{propss.title}</Text>
    </View>
  )
}

export default function App() {

  const [name, setName] = useState('Ruth');
  // console.log(name);
  let [age, setAge] = useState('20');


  const accessMyContacts = () => {
    console.log("accessing my contacts");
    setName('Chisom');
    console.log(name);
  }

  const happyBirthday = () => {
    setAge(++age);
    console.log(age);
  }

  return (
    <SafeAreaView>
    {/* <SafeAreaView style={{flex:1}}> */}
    
      {/* list */}
      {/* i had to bring Flatlist outside ScrollView because both have scroll feature, which will clash */}
      {/* move to a new screen to test */}
      <View>
        <FlatList
        horizontal
        data={names}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          console.log("names", item);
          return <Users names={item.name}/>;
        }}
        ListHeaderComponent={() => {
          return(
            <View style={{margin:10}}>
            <Text>List of User Names</Text>
            </View>
          );
        }}
        />
      </View>
    </SafeAreaView>

    
  );
}


