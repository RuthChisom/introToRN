import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import Section2 from './components/Section2';
import styles from './styles'

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
      <View style={styles.container}>
        {/* header text */}
        <View style={styles.head}>
          <Text style={styles.headerText}>Welcome to MY Intro to React Native</Text>
        </View>

        {/* paragraph */}
        <View style={styles.paragraph}>
          <Text style={styles.pText}>This is going to be fun!!</Text>
          <StatusBar style="auto" />
        </View>

        {/* image */}
        <View style={styles.myImgContainer}>
          <Image
           style={styles.myImg}
          source={require("./assets/logo-react-icon.png")}
          resizeMode="contain"
          />
        </View>

        {/* button */}
        <View style={styles.btnArea}>
          <TouchableOpacity onPress={accessMyContacts} style={styles.btn}>
            <Text style={styles.btnText}>Access My Contact</Text>
          </TouchableOpacity>

        </View>

        <Button title='Happy Birthday' onPress={happyBirthday} />

        <Text>{age} Years Old</Text>

        <Section title="Section 1"/>
        
        <Section2 title="Section 2"/>
        
      </View>
      
    </SafeAreaView>

    
  );
}


