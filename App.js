import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import Section2 from './components/Section2';

const Section = (propss) => {
  return (
    <View style={{margin : 10}}>
      <Text style={{fontSize: 20, fontWeight: 500}}>{propss.title}</Text>
    </View>
  )
}

export default function App() {

  const [name, setName] = useState('Ruth');
  console.log(name);


  const accessMyContacts = () => {
    console.log("accessing my contacts");
    setName('Chisom');
    console.log(name);
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
            <Text style={styles.btnText}>Access</Text>
          </TouchableOpacity>

        </View>

        <Button title='Access My Contact' onPress={accessMyContacts} />

        <Section title="Section 1"/>
        
        <Section2 title="Section 2"/>
      </View>
      
     </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  head: {
    margin: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 500,
  },
  paragraph: {
    margin: 15,
  },
  pText: {
    fontSize: 15,
    textAlign: "justify",
  },
  btnArea: {
    margin: 10,
    justifyContent: "center",
  },
  btn: {
    borderRadius: 8,
    margin: 10,
    backgroundColor: "green",
  },
  btnText: {
    color: "white",
    padding: 10,
  },
  myImgContainer: {
    margin: 10,
    alignItems: "center",
  },
  myImg: {
    width: 200,
    height: 200,
  }
});
